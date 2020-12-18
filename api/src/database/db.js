const mysql = require('mysql')
const connect = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'chef_d_oeuvre',
    port: 3308
})

connect.connect(function(err){
    if(err) throw err
    let createDB = "CREATE database IF NOT EXISTS chef_d_oeuvre"
    let productTable = "CREATE TABLE IF NOT EXISTS produits (id_produit INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(1000) NOT NULL, description VARCHAR(2000) NOT NULL,prix_ttc INT(255) NOT NULL, stock INT(255) NOT NULL)"
    let panierTable = "CREATE TABLE IF NOT EXISTS paniers (id_panier INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, id_produit INT(255) NOT NULL,quantité INT(255) NOT NULL, FOREIGN KEY (id_produit) REFERENCES produits(id_produit))"
    connect.query(createDB, (err)=>{
        if (err) throw err
        else console.log('Database crée');
    })
    connect.query(productTable, (err) => {
        if(err) throw err
        else console.log('Table produit crée');
    })
    connect.query(panierTable, (err) => {
        if (err) throw err
        else console.log("Table panier crée");
    })

})

module.exports = connect