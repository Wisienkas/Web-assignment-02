/**
 * Created by wisienkas on 11-04-2015.
 */
Parse.initialize("qjnTttFV6ZzF8BXJ7qoluCOHG2yUGg0tKtRC6RdK", "z3txBOG5ywRRIMUhqIlu9f5eCXSzEyTNqo57ycRI");

function login(usr, pass) {
    if(Parse.User.current()) {
        alert("You are already Logged In, Loggin user current user out!");
        Parse.User.logOut();
    }
    Parse.User.logIn(usr, pass, {
        success: function(user) {
            // Do stuff after successful login.
            alert("Login success!");
            window.location.href = "index.html";
            self.undelegateEvents();
            delete self;
        },
        error: function(user, error) {
            // The login failed. Check error to see why.
            alert("Username or Password is Wrong");
        }
    });
}

function showUser() {
    var user = Parse.User.current();
    if(user) {
        console.log("User logged in as: " + user.getUsername());
    } else {
        console.log("No user is logged")
    }
}

$("document").ready(function() {

    $("#login-form").submit(function(event) {
        event.preventDefault();
    });

    $("#login-btn").click(function() {
        login($("#inputUsername").val(), $("#inputPassword").val());
    });

    showUser();
});


/*
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
    alert("yay! it worked");
});

*/