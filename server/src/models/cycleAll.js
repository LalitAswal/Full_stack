const connection  = require('../config/database');
 
let  allCycle1 =async ()=>{
    console.log('checking 4');

    let qry =`select * from player.hockey`;
    const results = await connection.promise().query(qry)
    const pluck = property => element => element[property]
    let count = Object.keys(results[0]).length;
    console.log('count number are =',count);
    // console.log('lalitaswal checking result',results);
    return {data:{
      "count":count,
      "result":results[0]}}
}

module.exports = allCycle1;
