const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const expressLayouts = require('express-ejs-layouts')

app.use(expressLayouts)
app.set('views','./views')
app.set('view engine','ejs')

//Routes
app.get('/', (req, res) => {
    res.render('home/home')
});
app.get('/contact', (req, res) => {
    res.render('contact/list')
});
app.get('/contact/creer', (req, res) => {
    res.render('contact/create')
});
app.get("/contact/modifier",(req,res)=>{
    res.render('contact/update')
})
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