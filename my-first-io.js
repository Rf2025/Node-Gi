   
     const fs = require('fs')  

     const filePath = process.argv[2];

     //Since we are using async, rember to use a try catch or an async function



try {
    const files = fs.readFileSync(filePath,'utf-8');
    const fileContainer = files.split('\n').length - 1;
    console.log(fileContainer)
} catch(err){
    console.log('error retrieving files, try again',err)
}

