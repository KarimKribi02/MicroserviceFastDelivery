const mongoose = require('mongoose'); 
const CommandeSchema = new mongoose.Schema({
    produits: [{ produit_id: String, quantite: Number }],
    client_id: String,
    prix_total: Number,
    statut: { type: String, default: "En attente" },
    created_at: { type: Date, default: Date.now }
});
module.exports = Commande = mongoose.model('commande',CommandeSchema,'commande');