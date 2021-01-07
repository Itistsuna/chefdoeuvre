const auth = require('../middlewares/auth')

const deleteProduct = (app,connect) => {
    try {
        app.delete('/deleteProduct/:id',auth, (req, res) => {
            const sql = `DELETE FROM produits WHERE id_produit = ${req.params.id}`
            connect.query(sql,(err)=>{
                if(err) throw err
                else res.send('Produit supprimé')
            })
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = deleteProduct