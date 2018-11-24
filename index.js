const express = require("express");

const app = express();
const port = process.env.PORT || 5000;
const dbConnectionString = process.env.DATABASE_URL || "something";
const { Pool} = require('pg');
const pool = new Pool({dbConnectionString: dbConnectionString});

app.get("/person", getPerson);

app.listen(port, function() {
   console.log("server is listening on port" + port);
});

function getPerson(request,result) {
   console.log("getting person...");

   // get id from req
   var id = request.query.id;
   console.log("Trying to connect to a db at: " + dbConnectionString);

   getPersonFromDB(id, function(error, result){
      if (error || result == null || result.length != 1){
         console.log("error power level not over 9000")
      }
      else{
         response.json(result[0]);
      }
   });
   

   
   
}

function getPersonFromDB(id, callback){
     var sql = "SELECT * FROM person WHERE id = $1::int";
     var params = [id];

     pool.query(sql, params, function(error, result){
      if (error){
         console.log("log.wtf" + err);
         callback(error, null);
      }
     
      callback(null, result.rows);
     
     });


}