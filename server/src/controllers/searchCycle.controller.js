const searchCycleByName = require('../models/searchCycleByname');

let searchCycle =async (req, res)=>{
    try {
        let {name}   = req.query;
        // console.log('name ---->', req.query)
        let result =await  searchCycleByName(name);
        // console.log(result)
        return res.status(200).json(result);
        
    } catch (error) {
        // console.log('error ===>', error);
        return res.status(404).json(error)
    }

}

module.exports = searchCycle;