const Usuario = require('../models/user')
const bcrypt = require('bcrypt');
  

exports.getAll = async  () =>{
   return  await Usuario.find();
}

exports.buscaOne= async (req, res,next)=>{
    return await Usuario.findOne(req.email);


}




exports.post = async (req, res, next) =>{
   let salt = bcrypt.genSaltSync(10)
   let u = await Usuario.findOne({email: req.body.email})
 
   try{ 
      
      if(!u){
      const user = new Usuario(req.body);
      user.senha = bcrypt.hashSync(req.body.senha,  salt)
      delete user.senha;
      await user.save();
      
      res.status(200).json(user)
   }
   else{
      res.status(403).json({message: 'Email already registered', error:{}})
   }
}  catch(e){
   res.status(200).json(req.body)
}

}


   

   




 
