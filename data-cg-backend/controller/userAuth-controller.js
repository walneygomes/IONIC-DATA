const repository = require('../repository/user-auth-repository')

module.exports ={



    login: async (req, res)=>{
        repository.buscarOnde(req,res);
    }
}