const fs = require('fs');

function doRead(err, content) {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('file content:', content);
}

fs.readFile('../a.txt', 'utf-8', doRead);