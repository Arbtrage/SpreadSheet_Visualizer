const express = require('express');
const swaggerConfig = require('./swagger'); // Path to your Swagger configuration file

const cors = require('cors')
const app = express();

app.use(cors());
swaggerConfig(app);


//Server configurations and routes
app.use(express.urlencoded({extended:false}));
app.use('/',require('./routes/index'));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});