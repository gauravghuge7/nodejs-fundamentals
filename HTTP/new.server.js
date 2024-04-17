const http = require('http');

const server = http.createServer( (req,res) => {
    res.statusCode = 200;
    res.end(" this is the response4 of the server")



    
})

server.listen(5500, () => {
    console.log(" server activated ");
});

