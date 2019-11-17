#!/usr/local/bin/node

function inversAllTheLetter(str) {
    return str.split("").map(function(letter) {
        if (letter === letter.toUpperCase()) {
            letter = letter.toLowerCase();
        } else if (letter === letter.toLowerCase()) {
            letter = letter.toUpperCase();
        }
        return letter;
    }).join("");
}


let input = inversAllTheLetter("The world Never answer when i sAY hello");
console.log(input);


// output:
// tHE WORLD nEVER ANSWER WHEN I Say HELLO
