const buf = new Buffer(1024);
const fs = require('fs');


fs.open('normal.txt', "r+", function (err, fd) {

    if (err) { 
        console.log(' error in opening file ', err);
    } 
    
    console.log(' file opened successfully ');

    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {

        if(err) { 
            console.log(" error in reading file ", err);
        }

        console.log(" file read successfully !");

        console.log(" data ", bytes);
        console.log(' data ', buf.slice(bytes).toString());

    })


});