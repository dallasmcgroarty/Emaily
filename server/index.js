const express = require('express');
const app = express();

//app.use(express.json());

app.get('/', (req,res) => {
  res.send({hi: 'there'});
});

// localhost:5000
app.listen(5000, () => {
  console.log('App listening on port 5000...');
});
