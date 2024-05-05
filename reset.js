const fs = require('fs');

// Chemin vers le fichier users.json
const filePath = 'public/users.json';

// Supprimer le contenu du fichier users.json
fs.writeFile(filePath, JSON.stringify({ users: [] }), (err) => {
    if (err) {
        console.error('Erreur lors de la suppression du contenu du fichier :', err);
        return;
    }
    console.log('Contenu du fichier users.json supprimé avec succès.');
});
