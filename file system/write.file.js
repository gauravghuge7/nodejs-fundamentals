const fs = require('fs');


fs.writeFile('normal.txt', 'pw skills ', function (err) {

    if(err) {
        console.log(" error in writing file ");
    }
    else {
        console.log('success in writing file ');      
    }

})


fs.appendFile('normal.txt', ' gaurav ghuge your are selected in google at package 38LPA ', 'UTF-8', function (err) {
    if (err) {
        console.log('error in the updating the file ',err);
    }
    else {
        console.log(' success in the updating the file ');

    }



    
    fs.close(fd, callback)



    /// //  closing the file 

   fs.close(fd, function (err) {

    if(err) {
    console.log(" error in closing the file ");
    }
    else {
        console.log("file successfully deleted");
    }

   })

})


