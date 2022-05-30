const express=require('express')
const port = 3001;
const app = express();
const api=require('./routes/api')
const path = require('path');


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set(express.static(path.join(__dirname, 'upload')));


app.use('/api',api)

   
const uploadDirectory = path.join(__dirname, "./upload");
app.use(express.static(uploadDirectory));




var server =app.listen(port, () => {
    console.log(`'server started on port ${port}...'`);
  });