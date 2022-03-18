const mongoose = require('mongoose');

const contact = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
} );


// export model :
module.exports =  mongoose.model("Contact", contact);
