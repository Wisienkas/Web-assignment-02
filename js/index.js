/**
 * Created by wisienkas on 11-04-2015.
 */
Parse.initialize("qjnTttFV6ZzF8BXJ7qoluCOHG2yUGg0tKtRC6RdK", "z3txBOG5ywRRIMUhqIlu9f5eCXSzEyTNqo57ycRI");

//$(document).ready(function() {
//    $("p").appendTo("\nUser Status: " + Parse.User.getUsername());
//});
Parse.User.current().get("username");

// Getting object factories
var Country = Parse.Object.extend("Country");
var Food = Parse.Object.extend("Food");

function fetchCountries() {
    var query = new Parse.Query(Country);
    query.find({
        success: function(results) {

        },
        error: function(error) {

        }
    })
}

function fetchFoods() {
    var query = new Parse.Query(Food);
    query.find({
        success: function(results) {

        },
        error: function(error) {

        }
    })
}

// Both have "Name" to be shown
function addItemToList(listId, item) {

}