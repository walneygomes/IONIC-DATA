const User = require('../models/user')
const bcrypt = require('bcrypt');
//assinar o token
const jwt= require('jsonwebtoken')

module.exports = {
    
    buscarOnde: async (req,res)=>{
        const password = req.body.senha;
        const email = req.body.email;

        User.findOne({email: email}).lean().exec((err, user)=>{
                if(err){

                    return res.status(500).json({
                        message: 'Um erro. Não foi encontrado o usuario.'
                    })
                }
                const auth_err=(password == '' || password==null || !user);

                
               


                if(!auth_err){
                    if( bcrypt.compareSync(password, user.senha)){
                        //aplicar uma criptografia
                        console.log("Aqui 2")
                        let token = jwt.sign({_id: user._id}, "%$@2312%$@", {expiresIn: 111119200});   
                       return res.json({
                            ...user, token: token
                        })
                    }
                } 
                return res.status(404).json({
                    message: ' Voce não digitou a senha ou o email corretamente'
                })




        })

         
    }


}