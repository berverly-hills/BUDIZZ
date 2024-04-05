function checkCodeLength() {
    var code = document.getElementById("code").value;
    var bouton = document.getElementById("bouton-rejoindre");
  
    if (code.length === 8) {
      bouton.disabled = false; // Activer le bouton si la longueur est exactement 8 caractères
    } else {
      bouton.disabled = true; // Désactiver le bouton sinon
    }
  }
  
  function rejoindreEvenement(url) {
    var code = document.getElementById("code").value;
    window.location.href = url
  }
  
  document.getElementById("code").addEventListener("input", checkCodeLength);
  
