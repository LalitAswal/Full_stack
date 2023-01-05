var updateCycle = require('../models/updateCycle');

let updateCycles =async(req, res)=>{

    try {
        let { name, idhockey } = req.query;
        console.log('checking update contorller');
        let result = await updateCycle(name, idhockey);
        return res.status(200).json(result);
        
    } catch (error) {
        return res.status(404).json(error);

    }
}

module.exports = updateCycles;