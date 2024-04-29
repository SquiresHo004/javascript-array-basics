// Hope Squires
// JavaScript Array Basics
// 
// April 29, 2024

const fullName = "Hope Squires"

const school = "West Senior High"

const outputString = `Script written by ${fullName} of ${school}`;

console.log(outputString);

const sanrioCharacters = ["hello kitty", "kuromi", "my melody", "keroppi", "badtz-maru"];

sanrioCharacters.push("tuxedosam");
console.log(`Adding tuxedosam using the push() method:` + sanrioCharacters);

sanrioCharacters.unshift("pochacco");
console.log(`Adding pochacco using the unshift() method:` + sanrioCharacters);