const dbConnectionString = process.env.DATABASE_URL || "something";
const { Pool} = require('pg');
const pool = new Pool({connectionString: dbConnectionString});

function getUserFromDB(username, pwd, callback){
     console.log("MAde it here");
     var sql = "SELECT id, username, pwd, name FROM users WHERE username = $1";
     var params = [username];
     console.log("MAde it here");
     pool.query(sql, params, function(error, result){
      if (error){
         console.log("UNABLE TO GET USER " + error);
         callback(error, null);
      }
      else{
        console.log(rows);
        callback(null, result.rows);   
      }
     
     });


}

module.exports = {
        getUserFromDB: getUserFromDB
};