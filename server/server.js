const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');
const port = 3000;
const app = express();
const path = require('path');
const cors = require('cors');
const jwt = require('./_helpers/jwt');
const contentRoute = require('./content/content.controller');
const userRoute = require('./users/users.controller');
const profileRoute = require('./profile/profile.controller');

//mongoDB access
async function testMongoDB() {
  const uri = "mongodb+srv://TheCs:4ZzcZ22pewd6JNy@cluster0.g5g83.mongodb.net/C-Portfolio?retryWrites=true&w=majority"
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

//Used to run react
app.use(express.static('client/build'));

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(cors());

// use JWT auth to secure the api
app.use(jwt.jwt());


//Think i need something here to run the home page?
app.get('/', (req, res) => {
    console.log(`URL: ${req.url}`);

    res.send({
    	message: 'Invalid path, is METHOD correct?'
    });
});

// user functions
app.use('/users', userRoute);

//Redirects anything with /content into our post routes folder
app.use('/content', contentRoute);

//Redirects anything with profile
app.use('/profile', profileRoute);

//redirects any other url to default
app.use(function(req, res){
    res.redirect(req.url);
});

// Start the server
const server = app.listen(process.env.PORT, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});
