#!/usr/local/bin/node

function uniqOne(string) {
    let first = "";
    for (let x =0; x < string.length; x++) {
        let counter = 0;
        for (let y = 0; y < string.length; y++) {
            if (string.charAt(y) === string.charAt(x)) {
                counter++;
            }
        }
        if (counter === 1) {
            return string.charAt(x);
        }
    }
}
let userInput = uniqOne("faabbcddeef");
console.log(userInput);

// Output:
// c

