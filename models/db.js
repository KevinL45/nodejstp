const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ContactDB', {
    newUserUrlParser: true
},
    err => {
    if (!err){
        console.log('Connection Success !')
    } else {
        console.log('Connection Error ' +err)
    }
})

require('./contact.model')
