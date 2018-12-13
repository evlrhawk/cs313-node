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

function getBudgetFromDB(user_id, callback){
     var sql = "SELECT u.username AS USERNAME, c.category AS CATEGORY, b._limit AS LIMIT, e.spent AS SPENT, e.description AS DESCRIPTION FROM budget b JOIN users u on b.user_id = u.id JOIN categories c on b.category_id = c.id JOIN expense e on b.user_id = e.user_id AND b.category_id = e.category_id WHERE b.user_id = $1";
     var params = [user_id];
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

module.exports = {
        getUserFromDB: getUserFromDB
      , postUserToDB: postUserToDB
      , getBudgetFromDB: getBudgetFromDB
};