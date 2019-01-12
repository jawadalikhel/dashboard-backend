const express = require('express');
const app = express();

require('./db/db')

app.listen(9000, () =>{
  console.log('server is running');
})
