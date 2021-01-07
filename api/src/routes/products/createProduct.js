const auth = require('../middlewares/auth')
const product = async function(app,connect){
    try {
        app.post("/createProduct",auth,(req,res)=>{
            const product = [
                req.body.id,
                req.body.name,
                req.body.description,
                req.body.prix_ttc,
                req.body.stock
            ]
            const sql = "INSERT INTO produits(id_owner,name,description,prix_ttc,stock) VALUES(?)"
            connect.query(sql,[product], (err)=>{
                if (err) {
                    throw err
                }
                else res.send('Produit enregistrées')
            })
        })   
    } catch (err) {
        console.log(err)
    }
}

module.exports = product