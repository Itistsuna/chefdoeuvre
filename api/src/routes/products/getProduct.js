const getProduct = (app, connect) => {
    app.get('/allProduct',(req,res) => {
        const sql = 'SELECT * FROM produits'
        connect.query(sql,(err, result) => {
            if (err) throw err
            res.send(result)
        })
    })

    app.get('/product/:id',(req,res) => {
        const sql = `SELECT * FROM produits WHERE id_produit = ${req.params.id}`
        connect.query(sql,(err,result) => {
            if (err) throw err
            else res.send(result)
        })
    })

    app.get('/products/:id', (req,res) => {
        const sql = `SELECT * FROM produits WHERE id_owner = ${req.params.id}`
        connect.query(sql,(err,result) => {
            if(err) throw err
            else res.send(result)
        })
    })
}

module.exports = getProduct