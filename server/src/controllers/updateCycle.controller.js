var updateCycle = require('../models/updateCycle');

let updateCycles =async(req, res)=>{

    try {
        let {  idhockey } = req.query;
        let { Name, age, Country, Gender, weight, height } = req.body;
        let result = await updateCycle(idhockey, Name, age, Country, Gender, weight, height);
        return res.status(200).json(result);
        
    } catch (error) {
        return res.status(404).json(error);

    }
}

module.exports = updateCycles;