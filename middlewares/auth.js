const jwt = require("jsonwebtoken");

module.exports = (req,res,next) => {
    let token = req.header("Authorization")
    if (!token) return res.status(401).send("access denied")

    try{
        let payload = jwt.verify(token, process.env.secretKey);
        req.payload = payload;
        next();
    }catch(error) {
        res.status(400).send("invalid token");
    }
}