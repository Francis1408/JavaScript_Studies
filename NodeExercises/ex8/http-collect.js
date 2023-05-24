const URL = process.argv[2];
const http = require('http');


http.get(URL, res =>{
    //res.setEncoding('utf-8');
    let str = '';
    res.on('data', function (chunk) {
        str += chunk;
    });

    res.on('end', function () {
        console.log(str.length);
        console.log(str);
    });
      
});

