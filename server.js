const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongodb = require('mongodb')

//je recupère les vues
app.set('views','./views')
//J'indique que c'est un fichier ejs
app.set('view engine','ejs')


app.get('/', (req, res) => {
    res.render('home/home')
});
app.get('/contact', (req, res) => {
    res.render('contact/contact')
});

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
        extended: true
    }));

app.listen(8000, () => {
    console.log('Serveur opérationnel');
});