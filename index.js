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

function getPerson(req,res) {
   console.log("getting person...");

   // get id from req
   console.log("Trying to connect to a db at: " + dbConnectionString);

   getPersonFromDB(id, function(err, res){
      console.log("");
   });
   

   res.json(res);
   
}

function getPersonFromDB(id, callback){
     var sql = "SELECT * FROM person WHERE id = $1::int";
     var params = [id];

     pool.query(sql, params, function(err, res){
      if (err){
         console.log("log.wtf" + err);
         callback(err, null);
      }
     
      callback(null, result.rows);
     
     });


}