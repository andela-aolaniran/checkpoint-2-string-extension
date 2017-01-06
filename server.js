// fetch express dependency
const express = require('express');

// initialize express app
const app = express();
// set static page folder
app.use(express.static('src'));
// set default route
app.get('/', (req, res) => {
  res.sendFile('index.html');
});
// select port
const port = process.env.PORT || 3090;
// start server
app.listen(port, () => {
    console.log(`App Started on port ${port}`);
});