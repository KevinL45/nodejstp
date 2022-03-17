const express = require('express');

const path = require('path');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')



app.use(expressLayouts)
app.set('views','./views')
app.set('view engine','ejs')

mongoose.connect('mongodb+srv://nodejstp:3qvBumFuC212Zmjh@cluster0.sub0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser : true , useUnifiedTopology : true},
() =>{
    console.log('Connexion à la base de données')
})

//Routes
app.get('/', (req, res) => {

    let ContactService = require('./services/ContactService')
    let contactService = new ContactService()
    let contacts = contactService.getAll()
    res.render('home/home', {contacts : contacts})
});
app.get('/contact', (req, res) => {
    res.render('contact/list', {contacts : undefined})
});

app.get('/contact/creer', (req, res) => {
    res.render('contact/addOrEdit', {contact: undefined})
});

app.get('/contact/modifier', (req, res) => {
    res.render('contact/addOrEdit', {contact: undefined})
});

app.get('/contact/detail/:id', (req, res) => {
    let ContactService = require('./services/ContactService')
    let contactService = new ContactService()
    let contact = contactService.getContact(req.params.id)
    res.render('contact/addOrEdit', {contact: contact})
});

app.get('/utilisateur/connexion', (req, res) => {
    res.render('user/connection')
});
app.get('/utilisateur/inscription', (req, res) => {
    res.render('user/signup')
});

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
        extended: true
    }));

app.listen(8000, () => {

    console.log('Serveur opérationnel');
});
