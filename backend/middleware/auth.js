const jwt = require('jsonwebtoken');
const SECRET_KEY = 'vindoChiItem';

const auth = (req,res,next) => {
    try{
        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1];
            let user = jwt.verify(token,SECRET_KEY);
            req.userId = user.user.id;
            next();

        }else{
            res.status(401).json({message: "Unauthorized user"})
        }

    }catch(err){
        console.log(err);
        res.status(401).json({message : "Unauthorized user"})

    }
}
module.exports = auth;