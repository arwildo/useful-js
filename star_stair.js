#!/usr/local/bin/node

function starStair(n) {
    for (let i = 1; i <= n; i++) {
        let star = "*";
        for (let y = 1; y < i; y++) {
            star = star + "*";
        }
    console.log(star);
    }
}


starStair(9)



// output:
//*
//**
//***
//****
//*****
//******
//*******
//********
//*********
