const express = require('express');

const path = require('path');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyParser = require('body-parser');

const app = express();



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`
    <h2>Welcome to your Contact Database!</h2>
    <h3>Accesser votre carnet de contacts ici <b> <a href="/contact/list">Database</a></b></h3>`)
})

app.set('views', path.join(__dirname, '/views/'))

app.engine('hbs', exphbs.engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: 'hbs',
    defaultLayout: 'MainLayout',
    layoutsDir: __dirname + '/views/layouts/',
    })
);

app.set("view engine", "hbs");

app.listen(8000, () => {
    console.log('Serveur opérationnel');
});
