const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');
const port = 3000;
const app = express();


//mongoDB access
async function testMongoDB() {
  const uri = "mongodb+srv://TheCs:sJHIy1dptoVHPT1d@c-portfolio.surpd.mongodb.net/C-Portfolio?retryWrites=true&w=majority"
  const client = new MongoClient(uri);
  await client.connect();
  await listDatabases(client);
  try {
      //Connect to the MongoDB cluster
      await client.connect();

      //Make the appropriate DB calls
      await listDatabases(client);

  } catch (e) {
    console.error(e);
  } finally {
      await client.close();
  }

}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};




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

app.get('/test', (req, res) => {
    console.log(`URL: ${req.url}`);

    res.send({
    	message: '👀'
    });
});

app.get('/Mongo', (req, res) => {
    testMongoDB().catch(console.error);
    res.send({
        message: 'Testing the Database'
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