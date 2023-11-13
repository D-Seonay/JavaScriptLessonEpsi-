

addEventListener("click", function() {
    afficherProduit();
});



function afficherProduit() {

    let nomProduit = 'T-shirt simple';
    var quantiteStock = 10;
    const prixProduit = 5;
    let enPromotion = false;

    console.log("nomProduit: " + nomProduit + "\nquantiteStock: " + quantiteStock + "\nprixProduit: " + prixProduit + "\nenPromotion: " + (enPromotion ? "oui" : "non"));
}