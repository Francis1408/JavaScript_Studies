const fs = require('fs');
const path = require('path');


function extension(element, ext){
    let extName = path.extname(element);
    return extName === '.' + ext;
}

module.exports = function filterFiles(direct, fileExt, callback) {
    fs.readdir(direct, (err, cb) =>{
        if(err) return callback(err);

        const files = cb.filter(file => extension(file, fileExt));
        callback(null, files);
    })
}

