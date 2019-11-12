#!/usr/local/bin/node

(function getCurrentDay() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let current = new Date();
    console.log("Today is " + days[current.getDay()] + ".");
})();

(function getCurrentTime() {
    let current = new Date();
    var hours = current.getHours() > 12 ? current.getHours() - 12 + " PM" : current.getHours() + " AM";
    var minutes = current.getMinutes();
    var seconds = current.getSeconds();
    console.log("The current time is " + hours + " : " + minutes + " : " + seconds + ".");
})();


// Output:
// Today is Monday.
// The current time is 9 PM : 24 : 22.
