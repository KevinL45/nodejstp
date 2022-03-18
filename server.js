const express = require('express');
// const path = require('path');
// const handlebars = require('handlebars');
// const exphbs = require('express-handlebars');
// const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
//const ContactService = require('./services/ContactService')
const expressLayouts = require('express-ejs-layouts');
// const qrCode = require('qrcode');
// const VCardGenerator = require('./js/VCardGenerator');
const contactRoute = require('./routes/contactRoute')
const userRoute = require('./routes/userRoute')

const app = express();


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
        extended: true
    }));

app.use(expressLayouts)
app.use('/',contactRoute)
app.use('/',userRoute)

app.set('views','./views')
app.set('view engine','ejs')



mongoose.connect('mongodb+srv://nodejstp:3qvBumFuC212Zmjh@cluster0.sub0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser : true , useUnifiedTopology : true},
() =>{
    console.log('Connexion à la base de données')
})

app.listen(8000, () => {

    console.log('Serveur opérationnel');
});
