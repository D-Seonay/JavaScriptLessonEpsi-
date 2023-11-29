
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
