const buttonExercise1 = document.getElementById("exercise1");


buttonExercise1.addEventListener("click", function() {
    afficherProduit();
});





function afficherProduit() {

    let nomProduit = 'T-shirt simple';
    var quantiteStock = 10;
    const prixProduit = 5;
    let enPromotion = false;

    console.log("nomProduit: " + nomProduit + "\nquantiteStock: " + quantiteStock + "\nprixProduit: " + prixProduit + "\nenPromotion: " + (enPromotion ? "oui" : "non"));
}


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





