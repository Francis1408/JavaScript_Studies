const http = require('http');
const fs = require('fs');

let file = process.argv[3];
let port = process.argv[2];

const server = http.createServer((req, res) =>{
    fs.createReadStream(file).pipe(res);

})
server.listen(port, () =>{
    console.log('Server is listening on //localhost:%s', port)
});