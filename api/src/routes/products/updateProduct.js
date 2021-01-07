const auth = require('../middlewares/auth')

const updateProduct = async function(app,connect){
    try {
      app.put(`/updateProduct/:id`,auth,(req, res) => {
        const sql = `UPDATE produits SET name = '${req.body.name}', description = '${req.body.description}', prix_ttc = ${req.body.prix_ttc}, stock = ${req.body.stock} WHERE id_produit = ${req.params.id}`
        connect.query(sql,(err)=>{
            if (err) throw err
            else res.send('Produit modifié')
        })
    })  
    } catch (err) {
      console.log(err);  
    }
    
}

module.exports = updateProduct