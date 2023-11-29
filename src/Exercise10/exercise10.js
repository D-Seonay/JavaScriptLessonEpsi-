// Création de l'échiquier
let echiquier = [
  ['T', 'C', 'F', 'D', 'R', 'F', 'C', 'T'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
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


