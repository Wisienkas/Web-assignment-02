/**
 * Created by wisienkas on 12-04-2015.
 */

// Will create countries and foods and add relations.

Parse.initialize("qjnTttFV6ZzF8BXJ7qoluCOHG2yUGg0tKtRC6RdK", "z3txBOG5ywRRIMUhqIlu9f5eCXSzEyTNqo57ycRI");

var Food = Parse.Object.extend("Food", null, {
    spawn: function(name, country) {
        var food = new Food();
        food.set("name", name);
        food.set("parent", country);
        return food;
    }
});
var Country = Parse.Object.extend("Country", null,{
    spawn: function(name) {
        var country = new Country();
        country.set("name", name);
        return country;
    }
});

var denmark = Country.spawn("Denmark");
var italy = Country.spawn("Italy");
var mexico = Country.spawn("Mexico");
var china = Country.spawn("China");
var germany = Country.spawn("Germany");

Food.spawn("Steak", denmark).save();
Food.spawn("Danish Rolls", denmark).save();
Food.spawn("Pizza", italy).save();
Food.spawn("Pasta Carbonara", italy).save();
Food.spawn("Tacos", mexico).save();
Food.spawn("Tortillas", mexico).save();
Food.spawn("Noodle Soup", china).save();
Food.spawn("Soy Egg", china).save();
Food.spawn("Bratwurst", germany).save();
Food.spawn("Weizenbier", germany).save();