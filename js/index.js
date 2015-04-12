/**
 * Created by wisienkas on 11-04-2015.
 */
Parse.initialize("qjnTttFV6ZzF8BXJ7qoluCOHG2yUGg0tKtRC6RdK", "z3txBOG5ywRRIMUhqIlu9f5eCXSzEyTNqo57ycRI");

//$(document).ready(function() {
//    $("p").appendTo("\nUser Status: " + Parse.User.getUsername());
//});

// Getting object factories
var Country = Parse.Object.extend("Country");
var Food = Parse.Object.extend("Food");

function fetchCountries() {
    var query = new Parse.Query(Country);
    query.find({
        success: function(results) {
            for(i = 0; i < results.length; i++) {
                var id = results[i].id;
                var country = '<li id="' + id + '"class="list-group-item country"><p>' + results[i].get("name") + '</p></li>';
                $("#countries").append(country);
                $("#" + id).click(function() {
                    $(".country").removeClass("highlight");
                    $(".food").removeClass("highlight");
                    $("#" + this.id).addClass("highlight");
                    $('.' + this.id).addClass("highlight");
                });
            }
        },
        error: function(error) {
            Alert("Failed to retrieve Countries");
        }
    })
}

function fetchFoods() {
    var query = new Parse.Query(Food);
    query.find({
        success: function(results) {
            for(i = 0; i < results.length; i++) {
                $("#foods").append('<li class="list-group-item food ' + results[i].get("parent").id + '"><p>' + results[i].get("name") + '</p></li>')
            }
        },
        error: function(error) {
            Alert("Failed to retrieve Foods");
        }
    })
}

fetchCountries();
fetchFoods();

// Both have "Name" to be shown
function addItemToList(listId, item) {

}