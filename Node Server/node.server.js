const http = require('http');

const PORT = 5501;

const HOSTNAME = 'localhost';

const server = http.createServer( (req,res) => {

    if(req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain')
        res.end(' welcome to node js server ');
    }

    else if(req.url == '/about') {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/plain')
        res.end(" about page")
    }

    else if(req.url == '/contact') {
        res.statusCode = 200;
        res.setHeader('content-Type', 'text/plain') 
        res.end('contact page')
    }
    else if (req.url == '/product') {
        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        }

        const apiReq = http.request(options, (apiRes) => {
            apiRes.on("data", (data) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(data.toString()));
            })
            
        })
        apiReq.on("error ", () => {
            console.log(e);
        })
        
        apiReq.end();

    }
    else {
        res.statusCode = 500;
        res.setHeader('content-Type', 'text/plain')
        res.end(" this is not a server ")
    }

});


server.listen(PORT, () => {
    console.log(`server activated on port ${HOSTNAME} : ${PORT}`);
})


