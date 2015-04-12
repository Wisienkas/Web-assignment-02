Parse.initialize("qjnTttFV6ZzF8BXJ7qoluCOHG2yUGg0tKtRC6RdK", "z3txBOG5ywRRIMUhqIlu9f5eCXSzEyTNqo57ycRI");

function makeUser(usr, pass, email, age) {
    var user = new Parse.User();
    user.set("username", usr);
    user.set("password", pass);
    user.set("email", email);
    user.set("age", age.toString());
    user.signUp(null, {
        success: function(user) {
            // Hooray! Let them use the app now.
            alert("Success!");
            window.location.href = "index.html";
            self.undelegateEvents();
            delete self;
        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    });
}

if(Parse.User.current()) {
    console.log("Logged user out");
    Parse.User.logOut();
}

$(document).ready( function() {
    $("#signup-form").submit(function(event) {
        event.preventDefault();
    });

    $("#signup-btn").click( function() {
        var usr = $("#inputUsername").val();
        var pass = $("#inputPassword").val();
        var email = $("#inputEmail").val();
        var age = $("#inputAge").val();

        makeUser(usr, pass, email, age);
    });

    console.log("ready");
});
