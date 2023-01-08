var deleteUsers = require('../models/deleteUser');

let deleteUser = async (req, res)=>{
    try {
        const Name = req.body;
        const result = await deleteUsers(Name);
        res.status(200).send(result)
        // res.render(result)
    } catch (error) {
        res.status(409).send(error)
   
    }
}

module.exports = deleteUser;