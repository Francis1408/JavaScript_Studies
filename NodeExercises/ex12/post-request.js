const http = require('http');
const map = require('through2-map');

let port = process.argv[2];

const server = http.createServer((req, res) => {

    if(req.method === 'POST') {
        req.pipe(map(chunk => {
            return chunk.toString().toUpperCase()
        })).pipe(res);
    }
    else {
        res.writeHead(405);
    }

}); 

server.listen(port, () =>{
    console.log('Server is listening on //localhost:%s', port)
});



