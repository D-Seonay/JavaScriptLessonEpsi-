
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
