const connection  = require('../config/database');
 
let  addCycles =async (idhockey, Name, age, Country, Gender, weight, height)=>{

    let checkingQuery = `select * from player.hockey where name= ? and age= ?`;
    console.log('checkingQuery', checkingQuery)
    const checkingValue = await connection.promise().query(checkingQuery,[Name, age]);
    console.log('checking value data is present or not', checkingValue[0].length )
    
    if(checkingValue[0].length === 0){
        // let qry =`insert into player.hockey values (?, ?, ?, ?, ?, ?,?)`;
        let qry = `INSERT INTO player.hockey (idhockey, name, age, country, Gender, wieght, height) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const results = await connection.promise().query(qry,[idhockey,Name, age, Country, Gender, weight, height])
        return {data: "data inserted successfully"}
    }
    throw  {"result":`data already exist`};
 
}

module.exports = addCycles;