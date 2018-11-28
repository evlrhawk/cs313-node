const dbConnectionString = process.env.DATABASE_URL || "something";
const { Pool} = require('pg');
const pool = new Pool({connectionString: dbConnectionString});

function getPersonFromDB(username, pwd, callback){
     var sql = "SELECT id, username, pwd, name FROM person WHERE username = $1::string";
     var params = [username];

     pool.query(sql, params, function(error, result){
      if (error){
         console.log("log.wtf" + error);
         callback(error, null);
      }
      else{
      if{
         pwd == 
      }
      callback(null, result.rows);   
      }
     
     });


}