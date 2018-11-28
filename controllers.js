const models = require("")

function getUser(request, response) {
    console.log("Getting details for a soft drink");

   //url style "soft_drink?id=4"
   var username = request.query.username;
   var pwd = request.query.pwd;

   models.getPersonFromDB(username, pwd, function(error, result){
      if (error || result == null || result.length < 1){
         console.log("error power level not over 9000")
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

module.exports = {
      getUser: getUser,
      createUser: createUser
   };