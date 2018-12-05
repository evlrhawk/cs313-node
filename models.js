const dbConnectionString = process.env.DATABASE_URL || "something";
const { Pool} = require('pg');
const pool = new Pool({connectionString: dbConnectionString});

function getUserFromDB(username, pwd, callback){
     var sql = "SELECT id, username, pwd, name FROM users WHERE username = $1";
     var params = [username];
     pool.query(sql, params, function(error, result){
      if (error){
         console.log("UNABLE TO GET USER " + error);
         callback(error, null);
      }
      else{
        callback(null, result.rows);   
      }
     
     });


}

function postUserToDB(username, pwd, name, callback) {
    console.log("MAde it here");
     var sql = "INSERT INTO users (username, pwd, name) VALUES ($1, $2, $3)";
     var values = [username, pwd, name];
     console.log("MAde it here");
     pool.query(sql, values, function(error, result){
      if (error){
         console.log("UNABLE TO GET USER " + error);
         callback(error, null);
      }
      else{
        callback(null,result.json({success : true}));   
      }
     
     });
}

module.exports = {
        getUserFromDB: getUserFromDB
      , postUserToDB: postUserToDB
};