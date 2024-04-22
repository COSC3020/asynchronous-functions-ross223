const numCheck = async (num, key) => {
    return new Promise((resolve) => {
        resolve(num == key);
    });
}

async function checkAsync(arr, key){
    const results = await Promise.all(await arr.map(async (num) => { // This site https://www.30secondsofcode.org/js/s/async-array-loops/ and 
        const match = await numCheck(num, key);                // this site https://medium.com/sliit-foss/js-async-await-in-array-methods-9142a35c6d6f
        if (match == true) {                                   // helped me understand promise functions
            return 1;
        } else {
            return 0;
        }
    }));
    const total = await results.reduce((tmp, current) => tmp + current, 0);
    console.log(total);
    return total;
}

async function doThing(arr, key) {
    const results = await checkAsync(arr, key);
    console.log(results);
    return results;
}

module.exports = {numCheck, checkAsync, doThing};
