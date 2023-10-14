const express = require('express')
const cors = require('cors')
const helmet = require('helmet');
const mongoose = require('mongoose')
const PORT = 3000
// const db =
const router = require('./routes');

const app = express();

app.use(express.json())
app.use(helmet());
app.use(cors());

app.use(router)

app.listen(PORT, () => console.log(`listening to PORT: ${PORT}`))