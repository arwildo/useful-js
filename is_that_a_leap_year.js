#!/usr/local/bin/node

function isThatLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            console.log(year + " is common year");
        } else {
            console.log(year + " is a leap year");
        }
    } else {
        console.log(year + " is common year");
    }
}

isThatLeapYear(2020);


// Output:
// 2020 is a leap year
