const jwt = require("jsonwebtoken")
const config = require('../config/config')
const auth = (req,res,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, config.secret);
        if (decodedToken) {
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