const fs = require('fs');
const path = require('path');

function extension(element){
    let extName = path.extname(element);
    return extName === '.' + process.argv[3];
}

function filterFiles(){
    fs.readdir(process.argv[2], (err, cb) => {
        const files = cb.filter(file => extension(file));
        files.forEach(file => console.log(file));
    }) 
}

filterFiles();