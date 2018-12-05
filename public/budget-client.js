function getUser() {
    console.log("Getting details for a soft drink");

   //url style "soft_drink?id=4"
   // var username = request.query.username;
   // var pwd = request.query.pwd;
   var username = "username=admin";
   var pwd = "pwd=admin";

// Get query string for request
   var string = "/user?" + username + "&" + pwd;

   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         var obj = JSON.parse(this.responseText);
         
         var string1 = "";
         for(var i = 0; i < obj.Search.length; i++){
            //filling in string eith html
         }
         console.log(string1);
         demo.innerHTML = string1;
      }
   };
  xhttp.open("GET", string, true);
  xhttp.send();
}
function createUser() {
   // var username = request.body.username;
   var username = "test4";
   var pwd = "test4";
   var name = "test4"


   var string = "http://www.omdbapi.com/?apikey=44d0bc01&s=" + search.value;

   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         var obj = JSON.parse(this.responseText);
         
         var string1 = "";
         for(var i = 0; i < obj.Search.length; i++){
            //filling in string eith html
         }
         console.log(string1);
         demo.innerHTML = string1;
      }
   };
  xhttp.open("GET", string, true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(JSON.stringify({
     username: username
   , pwd     : pwd
   , name    : name
  }));
}

function getCategory(argument) {
   // body...
}
function createCategory(argument) {
   // body...
}

function getBudget(argument) {
   
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