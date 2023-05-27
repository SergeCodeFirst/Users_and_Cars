const express = require('express');
const app = express()
const port = 8000;

const cors = require('cors');
app.use(cors()); // communicate with react


// Connect to the DB
require('./server/config/mongoose.config')

// Allow use to sent Json object along with our route 
app.use(express.json(), express.urlencoded({extended:true}))

// Gide to our route/sending app
require('./server/routes/user.routes')(app)


app.listen(port, () => console.log(`running on port: ${port}`))