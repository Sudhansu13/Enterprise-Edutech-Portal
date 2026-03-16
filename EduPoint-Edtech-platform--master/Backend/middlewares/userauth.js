const jwt = require('jsonwebtoken');

function userauth(req,res,next){
    const authorization = req.headers.authorization;
    const authArray = authorization.split(' ');
    const token = authArray[1];

    if(token){
        const decoded = jwt.verify(token,process.env.jwt_secret);
        req.userid = decoded.id;
        next();
    }else{
        return res.status(404).json({
            msg:"the user is not authorized"
        })
    }
}

module.exports = userauth;