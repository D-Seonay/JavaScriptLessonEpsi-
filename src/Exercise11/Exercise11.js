
// 1. Fonction pour valider le formulaire
function validerFormulaire(nom, email) {
  if (nom && email) {
    return true;
  } else {
    return false;
  }
}

// 2. Fonction anonyme pour afficher un message
const afficherMessage = function(message) {
  console.log(message);
};

// 3. Fonction fléchée pour envoyer les données
const envoyerDonnees = (donneesUtilisateur) => {
  console.log("Envoi des données :", donneesUtilisateur);
};

// 4. Exemple d'utilisation des fonctions
const nomUtilisateur = "John Doe";
const emailUtilisateur = "johndoe@example.com";

if (validerFormulaire(nomUtilisateur, emailUtilisateur)) {
  afficherMessage("Formulaire valide");
  envoyerDonnees({ nom: nomUtilisateur, email: emailUtilisateur });
} else {
  afficherMessage("Formulaire invalide");
}
