const assert = require("assert");
const code = require("./code.js");

// function from the slides to check between both
function nMatches(arr, key) {
    let m = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == key) m++;
    }
    return m;
}

async function test(){
    var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var key1 = 1;
    console.log(nMatches(arr1, key1));
    console.log(await code.doThing(arr1, key1));

    var arr2 = [0, 0, 0, 0, 0, 0, 0];
    var key2 = 1;
    console.log(nMatches(arr2, key2));
    console.log(await code.doThing(arr2, key2));

    var arr3 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
    var key3 = 2;
    console.log(nMatches(arr3, key3));
    console.log(await code.doThing(arr3, key3));

    var arr4 = [0, 0, 0, 0, 0, 0, 0];
    var key4 = 0;
    console.log(nMatches(arr4, key4));
    console.log(await code.doThing(arr4, key4));

    assert(await code.doThing(arr1, key1) == nMatches(arr1, key1));
    assert(await code.doThing(arr2, key2) == nMatches(arr2, key2));
    assert(await code.doThing(arr3, key3) == nMatches(arr3, key3));
    assert(await code.doThing(arr4, key4) == nMatches(arr4, key4));
}

test();
