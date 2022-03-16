const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Serveur opérationnel !');
});

app.listen(8000, () => {
    console.log('Serveur opérationnel');
});