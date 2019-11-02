const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', (req, res) => {
    res.end('hello world');
})

app.listen(port, () => console.log(`listening to port: ${port}`));
