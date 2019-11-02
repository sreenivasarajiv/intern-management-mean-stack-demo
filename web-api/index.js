const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;

const mongoose = require('mongoose');

const departments = require('./departments');

mongoose.connect('mongodb://localhost/database1', {
    useNewUrlParser: true,
	useUnifiedTopology: true
})
    .then(() => console.log('connected to mongodb'))
	.catch(err => console.error('couldn\'t connect to mongodb: ', err));

app.use(cors());
app.use(express.json());

app.use('/api/departments', departments)

app.listen(port, () => console.log(`listening to port: ${port}`));
