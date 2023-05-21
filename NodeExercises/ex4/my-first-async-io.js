const fs = require('fs');

 function countNewline(){
    fs.readFile(process.argv[2],'utf-8', function (err, cb){
        const str = cb.toString().split('\n');
        console.log(str.length-1);  
    }) 
}

countNewline();
