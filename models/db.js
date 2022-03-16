const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {
    newUserUrlParser: true
    useUnifiedTopology: true });

const db = mongoose.connection;

db.on('err', console.error.bind(console, 'connection error:'));
db.once('open', function (){
    console.log('Connected')
});

// Model
require('./contact.model')
