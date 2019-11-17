#!/usr/local/bin/node

function idGenerator(n) {
    let sampleList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let generatedId = "";

    for (let i = 0; i < n; i++) {
        generatedId = generatedId + sampleList.charAt(Math.floor(Math.random()*64));
    }
    console.log(generatedId);
}
// n = length of the id
idGenerator(353;


// Output:
// wYYr3Ffc7h9nHiwrnZLF7GqKZXRNmZAr
