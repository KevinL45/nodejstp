const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongodb = require('mongodb')

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Serveur opérationnel !');
});
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
        extended: true
    }));

app.listen(8000, () => {
    console.log('Serveur opérationnel');
});