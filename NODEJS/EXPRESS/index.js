const http=require('http');
const express=require('express');


//handler function
const app=express();

app.get('/',(req,res)=>{
  return res.send("this is home page");
});
app.get('/about',(req,res)=>{
    return res.send('this is about page');
})

const myserver=http.createServer(app);

myserver.listen(8000,()=>{
    console.log('server started!');
});