const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send('hello world');
});
 
app.listen(80, () => {
  console.log('test listening on port 80');
});