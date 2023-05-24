const http = require('http');
let url = require('url');

let port = process.argv[2];

function isoParser(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
    
}

function unixParser(time) {
    return {
        unixtime: time.getTime()
    }
}

function querySelector(url) {
    if(url.pathname === '/api/parsetime')
        return isoParser(new Date(url.query.iso));

    else if(url.pathname === '/api/unixtime')
        return unixParser(new Date(url.query.iso));
    
    else return "Please enter a valid pathname";

}

http.createServer(function (req, res) {
  // assign req.url to variable url
  if(req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      url = url.parse(req.url, true)
      res.end(JSON.stringify(querySelector(url)));
  }
  else{
    res.writeHead(405);
    res.end();
  }

}).listen(port, () =>{
    console.log('Server is listening on //localhost:%s', port)
});