
 
const fs = require('fs');
const path = require('path');


const filteredFiles = `.${process.argv[3]}`;

fs.readdir(process.argv[2], function(err, files) {
    if (err) {
        return console.error(err);
    }
    files.forEach(function(files) {
        if (path.extname(files) === filteredFiles) {
            console.log(files);
        }
    });
});
