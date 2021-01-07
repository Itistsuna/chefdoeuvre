const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('../config/config.js')
const signIn = async function(app,connect){
    app.post('/sign-in', (req,res) => {
        let sql = `SELECT * FROM client WHERE mail = '${req.body.email}'`
        if(req.body.password && req.body.email){
            connect.query(sql,async (err,result) => {
                if (err) throw err
                let token = await jwt.sign({
                    id : result[0].id_client,
                    name : result[0].nom
                }, config.secret, {expiresIn: "24h"})
                let checkPassword = await bcrypt.compare(req.body.password, result[0].mot_de_passe)
                if (checkPassword){
                    res.json({
                        auth: true,
                        token: token
                    })
                } else {
                    res.json({
                        auth: false
                    })
                }
            })   
        } else {
            res.send('password vide ou email vide')
        }
        
    })
}

module.exports = signIn