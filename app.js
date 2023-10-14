const express = require('express')
const cors = require('cors')
const helmet = require('helmet');
const mongoose = require('mongoose')
const PORT = 3000
const router = require('./routes');

// mongoose.connect('mongodb://localhost:27017')
//   .then(() => console.log('Connected to DB!'))
//   .catch(() => console.log('DB connection error!'));

const app = express();

app.use(express.json())
app.use(helmet());
app.use(cors());

app.use(router)

app.listen(PORT, () => console.log(`listening to PORT: ${PORT}`))
