const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8888;

app.use(express.json());

function saveUserData(name, city, interets) {
    const userData = {
        name: name,
        city: city,
        interets: interets
    };

    const usersFilePath = path.join(__dirname, 'public', 'users.json'); // Chemin absolu vers users.json

    fs.readFile(usersFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture du fichier users.json :", err);
            return;
        }

        let jsonData = JSON.parse(data);
        jsonData.users.push(userData);

        fs.writeFile(usersFilePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
            if (err) {
                console.error("Erreur lors de l'écriture dans le fichier users.json :", err);
                return;
            }
            console.log("Données utilisateur enregistrées avec succès dans users.json !");
        });
    });
}


// Endpoint pour servir interface-dentree.html

app.use(express.static(path.join(__dirname, 'public'))); 
// Définir le dossier public pour servir des fichiers statiques

// Endpoint pour servir interface-dentree.html
app.get('/', (req, res) => {
    // Spécifiez le chemin absolu vers le fichier HTML
    res.sendFile(path.join(__dirname, 'public', 'interface-dentree.html')); 
});

// Endpoint pour sauvegarder les données utilisateur
app.post('/saveData', (req, res) => {
    const { name, city, interets } = req.body;
    saveUserData(name, city, interets);
    res.status(200).send('Données enregistrées avec succès !');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
