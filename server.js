const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const ContactService = require('./services/ContactService')
const expressLayouts = require('express-ejs-layouts');
const qrCode = require('qrcode');
const { json } = require('express/lib/response');
const VCardGenerator = require('./js/VCardGenerator');

const app = express();


app.use(expressLayouts)
app.set('views','./views')
app.set('view engine','ejs')

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
        extended: true
    }));

mongoose.connect('mongodb+srv://nodejstp:3qvBumFuC212Zmjh@cluster0.sub0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser : true , useUnifiedTopology : true},
() =>{
    console.log('Connexion à la base de données')
})

//Routes
app.get('/', (req, res) => {
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

    let contactService = new ContactService()
    let vcard = new VCardGenerator()
    let contact = contactService.getContact(req.params.id)
      
    qrCode.toDataURL(vcard.generate(contact),function (err,url){
        res.render('contact/details', {contact: contact, qrCode : url})
    })



});

app.get('/utilisateur/connexion', (req, res) => {
    res.render('user/connection')
});
app.get('/utilisateur/inscription', (req, res) => {
    res.render('user/signup')
});

app.listen(8000, () => {

    console.log('Serveur opérationnel');
});
