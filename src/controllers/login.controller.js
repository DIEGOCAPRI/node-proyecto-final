import jwt from "jsonwebtoken";


export const login = (req,res)=>{
    const {email, password} = req.body;

    if (email == "diegocapri@gmail.com" && password == 1234){
       const token = jwt.sign({email}, process.env.SECRET,{
        expiresIn: "2h",
       })
     return res.json({token});  
    }

    res.status(401).json({error: "email o contraseña inexistentes" });
}