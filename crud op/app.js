const express = require("express")
const mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1:27017/EMS'
const app = express()
var cors = require('cors')

const bodyParser = require('body-parser');
const add = require('./controller/employee');
app.use(express.json());
const corsOptions = {
    origin: '*',
}
app.use(cors(corsOptions))

app.use('/employee', add);

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on('open', () => {
    console.log('connection successfull');
});
app.get('/', (req, res) => {
    res.send('home');
});
app.listen(3000);