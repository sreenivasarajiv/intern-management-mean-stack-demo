const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;

const mongoose = require('mongoose');

const departments = require('./departments');

mongoose.connect('mongodb://heroku_6jhp5x90:hvjte0ijgk0nonfogianrq0a3p@ds241308.mlab.com:41308/heroku_6jhp5x90', {
    useNewUrlParser: true,
	useUnifiedTopology: true
})
    .then(() => console.log('connected to mongodb'))
	.catch(err => console.error('couldn\'t connect to mongodb: ', err));

app.use(cors());
app.use(express.json());
app.use(express.static('../public'));

app.use('/api/departments', departments)

app.listen(port, () => console.log(`listening to port: ${port}`));
