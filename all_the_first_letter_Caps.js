#!/usr/local/bin/node

function capsTheFirstLetter(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split("");
        words[i][0] = words[i][0].toUpperCase();
        words[i] = words[i].join("");
    }
    console.log(words.join(" "));
}

capsTheFirstLetter("test one two and three");


// Output:
// Test One Two And Three
