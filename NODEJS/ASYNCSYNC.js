const fs=require('fs');
const os=require('os');

console.log(os.cpus().length); // no of cpusS

//blocking code
fs.readFileSync('./file.txt','utf-8');

//non blocking code
fs.readFile('./file.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{ console.log(data);}
});