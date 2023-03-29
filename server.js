const express = require('express');
const routes = require('./routes/routes')
const sql = require('mssql');
const bodyParser = require('body-parser');

const port = 3678;
const app = express();
app.use(express.json());

app.use('/',routes);
app.listen(port, () => {
    console.log(`Server starts at ${port}`)
})
