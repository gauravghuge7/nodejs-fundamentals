const http = require('http');

const options = {
    hostname: 'fakestoreapi.com',
    path: '/products',
    method: 'GET'
};


const apiReq = http.request(options, (apiRes) => {
    apiRes.on("data", (data) => {
        console.log(data.toString());
    })
    
})

apiReq.on("error ", () => {
    console.log(e);
})

apiReq.end();

