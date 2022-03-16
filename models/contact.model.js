const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: 'This field is required'
    },
    lastName:{
        type: String,
        required: 'This field is required'
    },
    email: {
        type: String,
        required: 'This field is required'
    },
    address: {
        type: String,
        required: 'This field is required'
    }
} );

mongoose.model("Contact", contactSchema);
