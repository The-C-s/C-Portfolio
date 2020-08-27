const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get('/', (req, res) => {
    console.log(`URL: ${req.url}`);

    res.send({
    	message: '👀'
    });
});

app.get('/api', (req, res) => {
	console.log(`URL: ${req.url}`);
	res.send({
    	team: 'C#s',
    	project: 'cPortfolio',
    	finalGrade: '100%'
    });
});

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});