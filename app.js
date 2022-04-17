const express=require('express')
const port = process.env.PORT || 5000;
const app = express();
const api=require('./routes/api')


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api',api)


app.get('',(req,res)=>{
  res.send("welcom to api 6")
})


var server =app.listen(port, () => {
    console.log(`'server started on port ${port}...'`);
  });