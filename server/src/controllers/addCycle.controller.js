var addCycles = require('../models/addCycle');

let addCycle = async (req, res)=>{
    try {
        console.log('checking ----5')
        const {idhockey,Name, age, Country, Gender, weight, height} = req.body;
        console.log("req.body==========", req.body);
        console.log(req.body.idhockey,
            req.body.Name,
            req.body.age,
            req.body.Country,
            req.body.Gender,
            req.body.wieght,
            req.body.height)
        const result = await addCycles(idhockey, Name, age, Country, Gender, weight, height);
        console.log("data =========>",result)
        res.status(200).send(result)
        // res.render(result)
    } catch (error) {
        console.log("error:====>", error)
        res.status(409).send(error)
   
    }
}

module.exports = addCycle;