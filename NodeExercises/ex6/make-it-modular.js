const mymodule = require('./mymodule.js');


mymodule(process.argv[2], process.argv[3], function (err, cb) {
    if(err) return console.error('There was an error',err);

    cb.forEach( file => {
        console.log(file);
    });
});