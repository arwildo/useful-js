#!/usr/local/bin/node

function christmasCountdown() {
    let christmas = {
        "day": 7,
        "month": 0,
        "futureChristmas": function (year) {
            return new Date(year, this.month, this.day);
        }
    };

    let dayLength = 1000 * 60 * 60 * 24;
    let nextChristmas;
    let current = new Date();
    let currentDay = current.getDate();
    let currentMonth = current.getMonth();
    let currentYear = current.getFullYear();

    if (currentMonth < christmas.month || (currentDay <= christmas.day && currentMonth === christmas.month)) {
        nextChristmas = christmas.futureChristmas(currentYear).getTime() - current.getTime();
    } else {
        nextChristmas = christmas.futureChristmas(currentYear + 1).getTime() - current.getTime();
    }

    nextChristmas = Math.ceil(nextChristmas / dayLength);
    console.log("Next christmas is in " + nextChristmas + " days.");
};

christmasCountdown()



// Output:
// Next christmas is in 57 days.
