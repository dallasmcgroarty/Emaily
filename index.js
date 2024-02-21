const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./services/passport');
//require('./models/User');

mongoose.connect(keys.mongoURI)

const app = express();

// require file that returns a function and call it immediately
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

// https://emaily-lkif.onrender.com/

app.listen(PORT, () => {
  console.log('App listening on port 5000...');
});
