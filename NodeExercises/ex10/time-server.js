const net = require('net'); 

const server = net.createServer(socket =>{
    let date = new Date();
    let day = `${date.getDate()}`;
    let month = `${date.getMonth() + 1}`;
    let hour = `${date.getHours()}`;
    let minute = `${date.getMinutes()}`;

    let dateFormat = `${date.getFullYear()}-${month.padStart(2,'0')}-${day.padStart(2,'0')} ${hour.padStart(2,'0')}:${minute.padStart(2,'0')}`;
    socket.write(dateFormat + '\n');
    socket.end();

});
server.listen(Number(process.argv[2]));