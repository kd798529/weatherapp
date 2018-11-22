const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const axios = require('axios');

const server = express();
server.use(bodyParser.json());
server.use(morgan('combined'));
server.use(helmet());



server.get('/', (req, res) => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=37ae7082326f852682b047bfc4381ace')
    .then((response) => {
        res.status(201).json(response);
    })
    .catch((error) => {
        res.status(500).json({error: " there was an error"});
    })
})

server.listen(3030, () => {
    console.log('server is listening on port 3030')
})