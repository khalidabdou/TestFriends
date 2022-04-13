const express=require('express')
const port =  3626;
const app = express();
const api=require('./routes/api')

app.use('/api',api)

app.get('',(req,res)=>{
  res.send("welcom to api")
})


var server =app.listen(port, () => {
    console.log(`'server started on port ${port}...'`);
  });