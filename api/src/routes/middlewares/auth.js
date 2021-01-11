const jwt = require("jsonwebtoken")
const config = require('../config/config')
const auth = (req,res,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const verifyToken = jwt.verify(token, config.secret);
        if (verifyToken) {
          next();
        } else {
          res.sendStatus(403)
        }
    } catch {
        res.status(401).json({
          error: new Error('Invalid request!')
        });
    }
}

module.exports = auth