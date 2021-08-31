import express from 'express';
const app = express();

import morgan from 'morgan'; ///track who is making what request from what ip. if its an attack, we can block the ip

const PORT = 8000;

// connect to mongodb
import mongoClient from './src/config/db.js';
mongoClient();

// middleware
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan('tiny'));

// load modules
import routers from './src/routers.js';

app.use('/api/v1', routers);

app.use('/', (req, res) => {
  res.send('You have reached the API of not to do task application');
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Server is running at http://localhost:${PORT}`);
});
