const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const Contact = require('./entities/Contact.js');

const VCardGenerator = require ('./js/generator/VCardGenerator.js')

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
    console.log("test")

    // test 
    let contactMock = new Contact()
    contactMock.firstName = "test"
    contactMock.lastName = "doe"
    contactMock.adress = '45 allée des fkjhfuijfhg'
    contactMock.mail = 'jjfgjrgfh@dfbhfhf.fr'
    console.log(contactMock)

    // test2

    const vCardGenerator = new VCardGenerator()
    let vCardContactMock =vCardGenerator.generate(contactMock)
    console.log(vCardContactMock)
    


});