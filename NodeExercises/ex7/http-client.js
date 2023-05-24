const URL = process.argv[2];
const http = require('http');

http.get(URL, res => {
    res.setEncoding('utf-8');
    res.on('data', function (data) {
        console.log(data.toString());
    })
    res.on('error', function(error){
        console.log(error.toString());
    })
}).on('error', console.error);
