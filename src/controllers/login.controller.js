import jwt from "jsonwebtoken";
import * as models from "../models/user.models.js";
import bcrypt from "bcryptjs";


export const login = async (req,res)=>{
    const {email, password} = req.body;

    const user = await models.checkUser(email);

    if(!user){
      return res.status(401).json({message: "Usuario o contraseña incorrectos"});
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if(!checkPassword){
      return res.status(401).json({message: "Usuario o contraseña incorrectos"});
    }
   
       const token = jwt.sign({email}, process.env.SECRET,{
        expiresIn: "2h",
       })
     return res.json({token});  
    
}