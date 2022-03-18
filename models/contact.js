const mongoose = require('mongoose');

const contact = new mongoose.Schema({
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


// export model:
mongoose.model("Contact", contact);
module.exports = contact;

/**
 * Alternative:
 * module.exports = mongoose.model('Contact', contactSchema);
 */
