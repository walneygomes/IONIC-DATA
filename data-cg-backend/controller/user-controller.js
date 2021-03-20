const repository = require('../repository/user-repository')

module.exports = {
    all: async (req, res, next) =>{
     
        console.log("Retornado")
        res.json(await repository.getAll());
    },
  
  
    buscarOne: async (req,res, next)=>{
        res.json(await repository.buscaOne(req, res, next));

    },
  
    salvar: async (req, res)=>{    
            await repository.post(req,res)
    }
    
   

}
   
