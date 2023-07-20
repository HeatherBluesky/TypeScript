var movieTitle = "Gridiron Gang";
movieTitle = "Coach Carter";
movieTitle.toUpperCase();
var numCatLives = 9;
numCatLives += 1;
var gameOver = false;
gameOver = true;
// basics of annotating a primitive type 
null;
undefined;
var nothing = null;
var foo = undefined;
//typescript can infer the type of a variable  based upon the value we assign it to
var tvShow = "Black Adder";
tvShow = "Black Books";
var isFunny = false;
isFunny = true;
// the any type - last resort
var thing = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();
//declare a variable separately from initializing it.
var movies = ["arrival", "aliens", "trainspotting"];
// let foundMovie; // sets it as a type of any. Defeats the point of typescript
var foundMovie; // will set it to eventually be a string 
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "arrival") {
        foundMovie = "arrival";
    }
}
