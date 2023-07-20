// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
function twoFer(person) {
    if (person === void 0) { person = "you"; }
    return "one for ".concat(person, ", one for me");
}
console.log(twoFer());
console.log(twoFer("Bonny"));
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
var isLeapYear = function (year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    else if (year % 400 === 0) {
        return true;
    }
    return false;
};
// refactored version. 
var isALeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log(isALeapYear(2012));
console.log(isALeapYear(2013));
