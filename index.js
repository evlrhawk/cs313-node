const express = require("express");

const app = express();
const port = process.env.PORT || 5000;
const dbConnectionString = process.env.DATABASE_URL || "something";
const { Pool} = require('pg')
const pool = new Pool();

app.get("/person", getPerson);

app.listen(port, function() {
   console.log("server is listening on port" + port);
});

function getPerson(req,res) {
   console.log("getting person...");

   // get id from req
   console.log("Trying to connect to a db at: " + dbConnectionString);

   pool.query('SELECT * FROM person WHERE id = $1', [1], (err, res) => {
      if (err) {
       throw err
      }

   res.json(res.rows[0]);
}