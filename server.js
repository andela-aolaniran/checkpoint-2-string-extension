// fetch express dependency
const express = require('express');

// initialize express app
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});
// select port
const port = process.env.PORT || 3090;
// start server
app.listen(port, () => {
    console.log(`App Started on port ${port}`);
});