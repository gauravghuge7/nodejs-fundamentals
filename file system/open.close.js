const fs = require('fs');

const buf = new Buffer(1024);


console.log('opening the file ');


fs.open('../../pravin.txt', 'r+', function (err, fd) {

    if(err) {
        console.log(" error while opening the file ");
    }
    else {
        console.log(" file open successfully! ");
    }

    console.log(' reading the open file ');

    fs.writeFile("../../pravin.txt", '', function (err, data) {

        if(err) {
            console.log(" error in opening the file ");
        }
        else {
            console.log(' file opened successfully! ');
        }

        fs.writeFile('../../pravin.txt', ' this is pravin blogger  ', function (err, data) {

            if(err) {
                console.log(' error in the writing the file ');
            }
            else {
                console.log(' file wrritten the successfully ');
            }            

            return data;

        })



    })

})