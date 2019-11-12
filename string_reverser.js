#!/usr/local/bin/node

function stringReverser(str) {
    str = str.toString();
    let newStr = "";
    let x = 0;

    while (x < str.length) {
        newStr = newStr + str.slice(str.length -1 -x, str.length -x);
        x++;
    }
    console.log(newStr);
}

let input = "World never respon when I say Hello :(";
console.log(input);
stringReverser(input);

// Output:
// World never respon when I say Hello :(
// (: olleH yas I nehw nopser reven dlroW

