var connection = require('../config/database');

let updateCycle = async(Name, age, Country, Gender, weight, height, idhockey)=>{
    const qry = `update  player.hockey set name = ? where idhockey =?`;
    const result = await connection.promise().query(qry,[name, idhockey]);
    console.log('checking --', result[0]['changedRows'])
    if(result[0]['changedRows']!==0){
        throw `data hockeyId ${idhockey} doest not exist`
    }
    return`Updated hockeyId Successfully `

}


module.exports = updateCycle;