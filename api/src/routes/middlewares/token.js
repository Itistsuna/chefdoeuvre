const jwt = require('jsonwebtoken')

const token = (app) => {
    app.post('/token',(req,res) => {
        const token = req.headers.authorization.split(' ')[1];
        const decodedtoken = jwt.decode(token)
        res.send(decodedtoken)
    })
}

module.exports = token