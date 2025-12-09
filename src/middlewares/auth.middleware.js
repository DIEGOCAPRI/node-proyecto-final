import jwt from "jsonwebtoken";

export const auth = (req, res, next){
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token){
        return res.status(401).json({mensaje:"Sin token"});
    }

    jwt.verify(token ,process.env.SECRET, (error)=> {
        if (error) {
         return res.status(403).json({mensaje:"Token invalido"});   
        }
        next();
    })
}