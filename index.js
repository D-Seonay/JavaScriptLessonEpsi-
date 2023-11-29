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




