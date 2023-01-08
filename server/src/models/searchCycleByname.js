const connection = require('../config/database');

let searchCycleByName = async(name) =>{
    // console.log('checking line 4 in search cycle by name')
    let query = `select * from player.hockey where name= ?`;
    let result = await connection.promise().query(query,[name]);
    console.log('length of result is ',result[0].length)
    if (result[0] !==[] && result[0].length >0){
        return result[0]
    }else{

        throw {'data': `no such data with name ${name}`}
    }

}

module.exports = searchCycleByName;