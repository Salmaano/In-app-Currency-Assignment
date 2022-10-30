const jwt = require("jsonwebtoken");
const errors = require('../errors/common.errors');

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    } catch (error) {
        res.status(400);
        res.send({
            message: 'The token provided is invalid'
        });
    }
    return next();

}


module.exports = {
    verifyToken
};