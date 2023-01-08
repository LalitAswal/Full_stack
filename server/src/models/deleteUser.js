const connection  = require('../config/database');

let deleteUsers = async (Name) => {
    const values = Object.values(Name)[0];
    const placeholders = values.map(() => '?').join(',');
    const qry = `DELETE FROM player.hockey WHERE Name IN (${placeholders})`;
    const results = await connection.promise().query(qry, values);
    return {
        
       "data":"Data changed successfully"
    };
};


module.exports = deleteUsers;
