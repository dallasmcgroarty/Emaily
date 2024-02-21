const express = require('express');
require('./services/passport');

const app = express();

// require file that returns a function and call it immediately
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

// https://emaily-lkif.onrender.com/

app.listen(PORT, () => {
  console.log('App listening on port 5000...');
});
