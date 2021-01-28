const getProduct = (app, connect) => {
    app.get('/allProduct',(req,res) => {
        const sql = 'SELECT * FROM produits'
        connect.query(sql,(err, result) => {
            if (err) throw err
            res.send(result)
        })
    })
}

module.exports = getProduct