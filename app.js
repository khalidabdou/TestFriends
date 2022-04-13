const express=require('express')
const port = process.env.PORT || 5000;
const app = express();
const api=require('./routes/api')

app.use('/api',api)




var server =app.listen(port, () => {
    console.log(`'server started on port ${port}...'`);
  });