const express = require("express");
const controller = require("./controllers.js")

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/user", controller.getUser);
app.post("/user", controller.createUser);

// app.get("/category", controller.getCategory);
// app.post("/category", controller.createCategory);

app.get("/budget", controller.getBudget);
// app.post("/budget", controller.createBudget);
// app.put("/budget", controller.updateBudget);

// app.get("/expense", controller.getExpense);
// app.post("/expense", controller.createExpense);
// app.put("/expense", controller.updateExpense);


app.listen(port, function() {
   console.log("server is listening on port" + port);
});























// examples from team activities 

app.get("/person", getPerson);



function getPerson(request,response) {
   console.log("getting person...");

   // get id from req
   var id = request.query.id;
   console.log("Trying to connect to a db at: " + dbConnectionString);

   getPersonFromDB(id, function(error, result){
      if (error || result == null || result.length < 1){
         console.log("error power level not over 9000")
         response.status(500).json({success: false, data: error});
      }
      else{
         response.status(200).json(result[0]);
      }
   });
   

   
   
}

function getPersonFromDB(id, callback){
     var sql = "SELECT * FROM person WHERE id = $1::int";
     var params = [id];

     pool.query(sql, params, function(error, result){
      if (error){
         console.log("log.wtf" + error);
         callback(error, null);
      }
     
      callback(null, result.rows);
     
     });


}

// function getPerson(request, response) {
//    // First get the person's id
//    var id = request.query.id;

//    // TODO: We should really check here for a valid id before continuing on...

//    // use a helper function to query the DB, and provide a callback for when it's done
//    getPersonFromDb(id, function(error, result) {
//       // This is the callback function that will be called when the DB is done.
//       // The job here is just to send it back.

//       // Make sure we got a row with the person, then prepare JSON to send back
//       if (error || result == null || result.length != 1) {
//          response.status(500).json({success: false, data: error});
//       } else {
//          var person = result[0];
//          response.status(200).json(result[0]);
//       }
//    });
// }

// // This function gets a person from the DB.
// // By separating this out from the handler above, we can keep our model
// // logic (this function) separate from our controller logic (the getPerson function)
// function getPersonFromDb(id, callback) {
//    console.log("Getting person from DB with id: " + id);

//    // Set up the SQL that we will use for our query. Note that we can make
//    // use of parameter placeholders just like with PHP's PDO.
//    var sql = "SELECT id, fName, lName, birth FROM person WHERE id = $1::int";

//    // We now set up an array of all the parameters we will pass to fill the
//    // placeholder spots we left in the query.
//    var params = [id];

//    // This runs the query, and then calls the provided anonymous callback function
//    // with the results.
//    pool.query(sql, params, function(err, result) {
//       // If an error occurred...
//       if (err) {
//          console.log("Error in query: ")
//          console.log(err);
//          callback(err, null);
//       }

//       // Log this to the console for debugging purposes.
//       console.log("Found result: " + JSON.stringify(result.rows));


//       // When someone else called this function, they supplied the function
//       // they wanted called when we were all done. Call that function now
//       // and pass it the results.

//       // (The first parameter is the error variable, so we will pass null.)
//       callback(null, result.rows);
//    });

// } // end of getPersonFromDb