const http = require('http');

const options = {
    hostname: "fakestoreapi.com",
    path: "/products/1",
    method: "GET"
};


const apiReq = http.request(options, (res) => {
    res.on("data", (data) => {
        console.log(data.toString());
    })
})

apiReq.on("error", () => {
    console.log(e);
} )

apiReq.end();