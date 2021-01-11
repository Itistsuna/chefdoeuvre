const auth = require('../middlewares/auth')
const jwt = require('jsonwebtoken')
const product = async function(app,connect){
    try {
        app.post("/createProduct",auth, async (req,res)=>{
            const token = req.headers.authorization.split(' ')[1]
            const decodedToken = jwt.decode(token)
            const product = [
                decodedToken.id,
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