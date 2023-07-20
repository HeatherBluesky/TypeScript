let movieTitle: string = "Gridiron Gang";
movieTitle = "Coach Carter";
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives += 1;

let gameOver: boolean = false;
gameOver = true;

// basics of annotating a primitive type 

null 
undefined

let nothing: null = null;
let foo: undefined = undefined;


//typescript can infer the type of a variable  based upon the value we assign it to
let tvShow = "Black Adder";
tvShow ="Black Books";

let isFunny = false;
isFunny = true;

// the any type - last resort

let thing: any = "hello";
thing = 1;
thing = false;
thing()
thing.toUpperCase();


//declare a variable separately from initializing it.

const movies = ["arrival", "aliens", "trainspotting"]
// let foundMovie; // sets it as a type of any. Defeats the point of typescript
let foundMovie: string; // will set it to eventually be a string 
for( let movie of movies){
    if(movie === "arrival"){
        foundMovie = "arrival";
    }
}