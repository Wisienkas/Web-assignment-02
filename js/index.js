/**
 * Created by wisienkas on 11-04-2015.
 */
Parse.initialize("qjnTttFV6ZzF8BXJ7qoluCOHG2yUGg0tKtRC6RdK", "z3txBOG5ywRRIMUhqIlu9f5eCXSzEyTNqo57ycRI");

//$(document).ready(function() {
//    $("p").appendTo("\nUser Status: " + Parse.User.getUsername());
//});
Parse.User.current().get("username");