const http = require('http');

const PORT = 5003;

const server = http.createServer((req,res) => {

    if(req.url == '/') {
        res.end('<h1> chaitanya bhimrao gaikwad </h1>');
    } 
    else {
        console.log(" this is not a server ");
    }

})


server.listen(PORT, () => {
    console.log(" server activated on localhost ",PORT);
});

