/**
 * Created by wisienkas on 11-04-2015.
 */
Parse.initialize("qjnTttFV6ZzF8BXJ7qoluCOHG2yUGg0tKtRC6RdK", "z3txBOG5ywRRIMUhqIlu9f5eCXSzEyTNqo57ycRI");

function login(usr, pass) {
    Parse.User.logIn(usr, pass, {

    });
}

$("document").ready(function() {
   $("#login-btn").click(function() {
       if(Parse.User.current()) {
           alert("You are already Logged In, Please log out first");
           Parse.User.logOut();
       }
       alert("alert 2");
       Parse.User.logIn($("#inputUsername").val(), $("#inputPassword").val(), {
           success: function(user) {
               // Do stuff after successful login.
               alert("Login success!");
           },
           error: function(user, error) {
               // The login failed. Check error to see why.
               alert("Login Failed with Error: " + error + " User: " + user);
           }
       });
   })
});


/*
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
    alert("yay! it worked");
});

*/