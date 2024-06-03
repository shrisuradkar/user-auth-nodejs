const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

connectDB();

app.use(bodyParser.json());
app.use('/user', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
// const PORT =  5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
