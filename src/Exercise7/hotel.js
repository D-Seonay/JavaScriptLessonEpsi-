// Classe Chambre
class Chambre {
  constructor(numero, type) {
    this.numero = numero;
    this.type = type;
    this.estOccupe = false;
  }
  changerStatut() {
    this.estOccupe = !this.estOccupe;
  }
}

// Classe Client
class Client {
  constructor(nom, numeroTelephone) {
    this.nom = nom;
    this.numeroTelephone = numeroTelephone;
  }
}

// Classe Réservation
class Reservation {
  constructor(client, chambre, dateDebut, dateFin) {
    this.client = client;
    this.chambre = chambre;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
  }
}

// Classe Hôtel
class Hotel {
  constructor() {
    this.chambres = [];
    this.reservations = [];
  }

  ajouterChambre(chambre) {
    this.chambres.push(chambre);
  }

  faireReservation(client, numeroDeChambre, dateDebut, dateFin) {
    const chambre = this.chambres.find(chambre => chambre.numero === numeroDeChambre);
    if (chambre && chambre.estOccupe === false) {
      const reservation = new Reservation(client, chambre, dateDebut, dateFin);
      chambre.changerStatut()  ;
      this.reservations.push(reservation);
      console.log("Réservation effectuée avec succès !", client.nom, chambre.numero, dateDebut, dateFin );
    }
    else {
      console.log("La chambre spécifiée n'existe pas ou est déjà occupée.");
    }
  }
}

// Exemple d'utilisation
let hotel = new Hotel();
hotel.ajouterChambre(new Chambre(1, "simple"));
hotel.ajouterChambre(new Chambre(2, "double"));
hotel.ajouterChambre(new Chambre(3, "suite"));


let client1 = new Client("Matheo DELAUNAY", "0123456789");
let client2 = new Client("Jane Doe", "0123456789");

hotel.faireReservation(client1, 1, "2020-01-01", "2020-01-15");

