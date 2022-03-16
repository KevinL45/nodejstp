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


// export model:
mongoose.model("Contact", contactSchema);
module.exports = contactSchema;

/**
 * Alternative:
 * module.exports = mongoose.model('Contact', contactSchema);
 */
