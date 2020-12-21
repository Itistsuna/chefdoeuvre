const bcrypt = require('bcrypt')
const signUp = async function(app, connect){
    app.post('/sign-up', async (req,res,next) => {
        
        let sql = `SELECT mail FROM client WHERE mail = '${req.body.email}'`
        if(req.body.email){
            connect.query(sql, (err,result) => {
                if (err) throw err
                if (result.length === 1) { 
                    res.json({
                        email: 'existant'
                    })
                }
                else {
                    next()
                }
            })
        }
    }, async (req,res) => {
            let sql = "INSERT INTO client (nom,prenom,adresse,code_postal,ville,telephone,mail,mot_de_passe) VALUES (?)"
            if(req.body.name && req.body.surname && req.body.adress && req.body.codepostal && req.body.ville && req.body.telephone && req.body.email && req.body.password){
                let hashPassword = await bcrypt.hash(req.body.password, 12)
                let data = [req.body.name,req.body.surname,req.body.adress,req.body.codepostal,req.body.ville,req.body.telephone,req.body.email,hashPassword]
                connect.query(sql,[data],(err)=>{
                    if (err) throw err
                    res.send('Inscription done')
                })
            }
    })
}

module.exports = signUp
