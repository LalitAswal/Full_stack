var allCycle1 = require('../models/cycleAll');

var  getAllCycles  = async (req, res) => {
    try {
        console.log('checking 1');
        let allCycle = await allCycle1()
        // console.log('checking 2',allCycle);
        return res.status(200).json(allCycle);
        } catch (error) {
            console.log(error)
            res.status(500).json({"data": error});
    }
   
}


module.exports = getAllCycles;
