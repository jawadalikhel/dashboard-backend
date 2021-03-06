const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

require('./db/db')

const authController = require('./Controllers/authController');

app.use(session({
  secret: 'dashboard',
  resave: false,
  saveUninitialized: false,
}))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // This allows the session cookie to be sent back and forth
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.use('/auth', authController);

app.listen(process.env.PORT || 9000, () =>{
  console.log('server is running on Port 9000');
})
