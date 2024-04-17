const fs  = require('fs');

/*
console.log('READ START');

// asynchronous way to read data 

fs.readFile('input.txt', (err, data) => {
    if(err) {
        console.log(" error in reading file ");
        return err;

    }

    console.log(" file read successfully ")
    if (!data) {
        console.log(" data fetching problem ");
    }
    console.log('data =>> ', data.toString());
    return data;
})

*/


// Synchronous way to read file ( this is not proper way to read file )


let data = fs.readFileSync('input.txt');

console.log("READ START");
console.log('data => ', data.toString());
console.log('READ END');

console.log('OTHER STUFF ');

