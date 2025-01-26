// Affiche un message dans la console du navigateur
console.log("Bienvenue sur mon premier site avec Azure !");

// Ajoute une interaction avec un bouton
function afficherMessage() {
    alert("Vous avez cliqué sur le bouton !");
}

// Active l'événement lorsque le bouton est cliqué
document.addEventListener("DOMContentLoaded", function () {
    const bouton = document.getElementById("monBouton");
    if (bouton) {
        bouton.addEventListener("click", afficherMessage);
    }
});
