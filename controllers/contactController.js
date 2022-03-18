const contact = require('../models/contact');

exports.createContact = (req,res) => {
    const c = new contact()

    c.save()
}