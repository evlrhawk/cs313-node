const models = require("./models.js")

function getUser(request, response) {
    console.log("Getting details for a soft drink");

   //url style "soft_drink?id=4"
   // var username = request.query.username;
   // var pwd = request.query.pwd;
   var username = "admin";
   var pwd = "admin";
   console.log("Made it here 1");
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
   // body...
}

function getCategory(argument) {
   // body...
}
function createCategory(argument) {
   // body...
}

function getBudget(argument) {
   // body...
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