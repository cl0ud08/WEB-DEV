const fs = require('fs');

// fs.writeFileSync('file.txt', 'MY name is harshit');
// fs.writeFile('file.txt', 'MY name is harshit', err => {});

fs.readFile('./file.txt', 'utf-8', (err, data) => {
    if (err){
        console.log(err);}
    else console.log(data);
});