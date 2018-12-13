const models = require("./models.js")

function getUser(request, response) {
   console.log("Getting details for a soft drink");

   //url style "soft_drink?id=4"
   var username = request.query.username;
   var pwd = request.query.pwd;

   models.getUserFromDB(username, pwd, function(error, result){
      if (error || result == null || result.length < 1){
         console.log("Error: Incorrect Username or Password")
         response.status(500).json({success: false, data: error});
      }
      else{
         response.status(200).json(result[0]);
      }
   });
}
function createUser(request, response) {
   // var username = request.body.username;
   var username = "test4";
   var pwd = "test4";
   var name = "test4"
   models.postUserToDB(username, pwd, name, function(error, result){
      if (error || result == null || result.length < 1){
         console.log("Error: Incorrect Username or Password")
         response.status(500).json({success: false, data: error});
      }
      else{
         response.status(200).json(result);
      }
   });
}

function getCategory(argument) {
   // body...
}
function createCategory(argument) {
   // body...
}

function getBudget(request, response) {
   console.log("Getting details for a soft drink");

   //url style "soft_drink?id=4"
   var user_id= request.query.userid;

   models.getBudgetFromDB(user_id, function(error, result){
      if (error || result == null || result.length < 1){
         console.log("Error: Incorrect Username or Password")
         response.status(500).json({success: false, data: error});
      }
      else{
         response.status(200).json(result[0]);
      }
   });
}
function createBudget(argument) {
   // body...
}
function updateBudget(argument) {
   // body...
}

function getExpense(argument) {
   // body...
}
function createExpense(argument) {
   // body...
}
function updateExpense(argument) {
   // body...
}

module.exports = {
        getUser: getUser
      , createUser: createUser
      , getBudget: getBudget
      , createBudget: createBudget
      , updateBudget: updateBudget
      , getExpense: getExpense
      , createExpense: createExpense
      , updateExpense: updateExpense
   };