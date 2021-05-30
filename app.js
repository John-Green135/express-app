const express = require('express');

console.log("Express App")

const app = express();

app.get('/', (req, res) => {
    res.send('Successful response.');
  });

  app.listen(3000, () => console.log('Example app is listening on port 3000.'));