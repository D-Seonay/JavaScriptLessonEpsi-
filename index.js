//Exercice 1
const buttonExercise1 = document.getElementById("exercise1");
buttonExercise1.addEventListener("click", function() {
    exercise1();
});
function exercise1() {

    let nomProduit = 'T-shirt simple';
    var quantiteStock = 10;
    const prixProduit = 5;
    let enPromotion = false;

    console.log("nomProduit: " + nomProduit + "\nquantiteStock: " + quantiteStock + "\nprixProduit: " + prixProduit + "\nenPromotion: " + (enPromotion ? "oui" : "non"));
}

//Exercice 2
const buttonExercise2 = document.getElementById("exercise2"); 
buttonExercise2.addEventListener("click", function() {
    exercise2();
});
function exercise2 () {

let nombreVentes = 120;
let totalVentes = 2400.00;
const obejctVentes = 100;

let prixMoyen = totalVentes / nombreVentes;
console.log("prixMoyen: " + prixMoyen);

let obejctVentesAtteint = nombreVentes >= obejctVentes ? "Oui" : "Non";

console.log("prixMoyen " + prixMoyen.toFixed ("€") + "\nobejctVentesAtteint: " + obejctVentesAtteint + "\nobjectVentes: " + obejctVentes + "\nnombreVentes: " + nombreVentes + "\ntotalVentes: " + totalVentes);
}

//Exercice 3
const buttonExercise3 = document.getElementById("exercise3");
buttonExercise3.addEventListener("click", function() {
    exercise3();
});
function exercise3 () {
let montantTotalAchat = 180;
let reduction = 0;

    switch (choixCategorie) {
        case "éléctronique":
            console.log("Vous avez choisi la catégorie éléctronique");
            break;
        case "vêtement":
            console.log("Vous avez choisi la catégorie vêtement");
            break;
        case "alimentation":
            console.log("Vous avez choisi la catégorie alimentation");
            break;
        default:
            console.log("Désolé, cette catégorie n'existe pas.");
            break;
    }
    
    if (choixCategorie == "éléctronique") {
        let reduction = montantTotalAchat * 0.1;
        console.log("Vous avez choisi la catégorie éléctronique");
    }
    else if (choixCategorie == "vêtement") {
        let reduction = montantTotalAchat * 0.2;
        console.log("Vous avez choisi la catégorie vêtement");
    }
    else if (choixCategorie == "alimentation") {
        let reduction = montantTotalAchat * 0.3;
        console.log("Vous avez choisi la catégorie alimentation");
    }
    else {
        console.log("Désolé, cette catégorie n'existe pas.");
    }
}

//Exercice 6
const buttonExercise6 = document.getElementById("exercise6");
buttonExercise6.addEventListener("click", function() {
    exercise6();
});
function exercise6 () {

// Inventaire d'articles
let inventory = {
    pommes: 20,
    bananes: 15,
    oranges: 30
  };
  
  // 1. Ajouter un nouvel article à l'inventaire
  inventory.cerises = 25;
  
  // 2. Augmenter le stock d'un article existant
  inventory.pommes += 10;
  
  // 3. Réduire le stock d'un autre article
  inventory.bananes -= 5;
  
  // 4. Supprimer un article de l'inventaire
  delete inventory.oranges;
  
  console.log(inventory);

}

//Exercice 9
const buttonExercise9 = document.getElementById("exercise9");
buttonExercise9.addEventListener("click", function() {
    exercise9();
});

function exercise9 () {

// 1. Créer un tableau reservations contenant des objets
let reservations = [
    {
      id: 1,
      nomClient: "John Doe",
      chambre: "101",
      nbNuits: 3,
      paye: true
    },
    {
      id: 2,
      nomClient: "Jane Smith",
      chambre: "202",
      nbNuits: 5,
      paye: false
    },
    {
      id: 3,
      nomClient: "Alice Johnson",
      chambre: "303",
      nbNuits: 2,
      paye: false
    }
  ];
  
  // 2. Lister toutes les réservations non payées
  let reservationsNonPayees = reservations.filter(reservation => !reservation.paye);
  console.log("Réservations non payées:", reservationsNonPayees);
  reservationsNonPayees.forEach(reservation => {
    console.log(` ID : ${reservation.id} \n Nom du client : ${reservation.nomClient} \n Chambre : ${reservation.chambre} \n Nombre de nuits : ${reservation.nbNuits} \n Payé : ${reservation.paye}` )
  });
  // 3. Calculer le revenu total potentiel de toutes les réservations non payées
  let revenuTotalPotentiel = reservationsNonPayees.reduce((total, reservation) => total + (reservation.nbNuits * 100), 0);
  console.log("Revenu total potentiel:", revenuTotalPotentiel);
  
  // 4. Trouver une réservation spécifique par id et changer son statut de payé à true
  let reservationId = 2;
  let reservationTrouvee = reservations.find(reservation => reservation.id === reservationId);
  if (reservationTrouvee) {
    reservationTrouvee.paye = true;
    console.log("Statut de la réservation", reservationId, "changé à payé");
  } else {
    console.log("Aucune réservation trouvée avec l'id", reservationId);
  }
  
  // 5. Ajouter une nouvelle réservation au tableau
  let nouvelleReservation = {
    id: 4,
    nomClient: "Bob Johnson",
    chambre: "404",
    nbNuits: 7,
    paye: false
  };
  reservations.push(nouvelleReservation);
  console.log("Nouvelle réservation ajoutée:", nouvelleReservation);

  return reservations;
  return reservationsNonPayees;
    return reservationId;
    return reservationTrouvee;
    return nouvelleReservation;

}

//Exercice 10
const buttonExercise10 = document.getElementById("exercise10");
buttonExercise10.addEventListener("click", function() {
    exercise10();
});

function exercise10 () {
    // Création de l'échiquier
let echiquier = [
    ['T', 'C', 'F', 'D', 'R', 'F', 'C', 'T'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['T', 'C', 'F', 'R', 'D', 'F', 'C', 'T']
  ];
  
  // Déplacer une pièce sur l'échiquier
  function deplacerPiece(origine, destination) {
    let piece = echiquier[origine[0]][origine[1]];
    echiquier[origine[0]][origine[1]] = ' ';
    echiquier[destination[0]][destination[1]] = piece;
  }
  
  // Vérifier si une case spécifique est vide
  function estCaseVide(caseCoord) {
    return echiquier[caseCoord[0]][caseCoord[1]] === ' ';
  }
  
  // Compter le nombre total de pièces sur l'échiquier
  function compterPieces() {
    let count = 0;
    for (let i = 0; i < echiquier.length; i++) {
      for (let j = 0; j < echiquier[i].length; j++) {
        if (echiquier[i][j] !== ' ') {
          count++;
        }
      }
    }
    return count;
  }
  
  // Supprimer toutes les pièces d'un type spécifique
  function supprimerPieces(typePiece) {
    for (let i = 0; i < echiquier.length; i++) {
      for (let j = 0; j < echiquier[i].length; j++) {
        if (echiquier[i][j] === typePiece) {
          echiquier[i][j] = ' ';
        }
      }
    }
  }
  
  // Afficher l'échiquier
  function afficherEchiquier() {
    for (let i = 0; i < echiquier.length; i++) {
      console.log(echiquier[i].join(' '));
    }
  }
  
  
    console.log (echiquier);
    return deplacerPiece;
    return estCaseVide;
    return compterPieces;
    return supprimerPieces;
    return afficherEchiquier;
}  

//Exercice 11
const buttonExercise11 = document.getElementById("exercise11");
buttonExercise11.addEventListener("click", function() {
    exercise11();
});

function exercise11 () {
    
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

    return validerFormulaire;
    return afficherMessage;
    return envoyerDonnees;
}

//Exercice 12
const buttonExercise13 = document.getElementById("exercise13");
buttonExercise13.addEventListener("click", function() {
    exercise13();
});

function exercise13 () {
    function creerQuiz(questions) {
        let index = 0;
        let score = 0;
      
        function poserQuestion() {
          if (index < questions.length) {
            const question = questions[index];
            const reponse = prompt(question);
            verifierReponse(reponse);
          } else {
            afficherScoreFinal();
          }
        }
      
        function verifierReponse(reponse) {
          const question = questions[index];
          if (reponse === question.reponse) {
            score++;
          }
          index++;
          poserQuestion();
        }
      
        function afficherScoreFinal() {
          alert("Score final : " + score);
        }
      
        return {
          poserQuestion,
          verifierReponse,
          afficherScoreFinal
        };
      }
      
      const questions = [
        { question: "Quelle est la capitale de la France ?", reponse: "Paris" },
        { question: "Quelle est la couleur du ciel ?", reponse: "Bleu" },
        { question: "Quelle est la capitale de l'Espagne ?", reponse: "Madrid" }
      ];
      
      const quiz = creerQuiz(questions);
      quiz.poserQuestion();
      
        return creerQuiz;
    }





