const mysql = require('mysql')
const connect = mysql.createConnection({
    host : 'localhost',
    user: process.env.user,
    password: process.env.password,
    database: process.env.dbname,
    port: 3308
})

connect.connect(function(err){
    if(err) throw err
    let createDB = "CREATE database IF NOT EXISTS chef_d_oeuvre"
    let productTable = "CREATE TABLE IF NOT EXISTS produits (id_produit INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(1000) NOT NULL, description VARCHAR(2000) NOT NULL,prix_ttc INT(255) NOT NULL, stock INT(255) NOT NULL)"
    let panierTable = "CREATE TABLE IF NOT EXISTS paniers (id_panier INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, id_produit INT(255) NOT NULL,quantité INT(255) NOT NULL, FOREIGN KEY (id_produit) REFERENCES produits(id_produit))"
    let clientTable = "CREATE TABLE IF NOT EXISTS client (id_client INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL,adresse VARCHAR(255) NOT NULL, code_postal INT(255) NOT NULL, ville VARCHAR(255) NOT NULL, telephone INT(255) NOT NULL, mail VARCHAR(255) NOT NULL, mot_de_passe VARCHAR(255) NOT NULL)"
    let livraisonsTable = "CREATE TABLE IF NOT EXISTS livraisons (id_livraison INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, id_cmd INT(255) NOT NULL, adresse VARCHAR(255) NOT NULL, code_postal INT(255) NOT NULL, ville VARCHAR(255) NOT NULL, FOREIGN KEY(id_cmd) REFERENCES commandes(id_cmd))"
    let commandesTable = "CREATE TABLE IF NOT EXISTS commandes (id_cmd INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, id_panier INT(255) NOT NULL, date_cmd DATE, total_ttc INT(255)  NOT NULL, suivi BOOLEAN, FOREIGN KEY(id_panier) REFERENCES paniers(id_panier))"
    connect.query(createDB, (err, results)=>{
        if (err) throw err
    })
    connect.query(productTable, (err, results) => {
        if(err) throw err
    })
    connect.query(panierTable, (err, results) => {
        if (err) throw err
    })
    connect.query(clientTable, (err, results) => {
        if(err) throw err
    })
    
    connect.query(commandesTable, (err, results) => {
        if(err) throw err
    })
    connect.query(livraisonsTable, (err, results) => {
        if(err) throw err
    })
})

module.exports = connect