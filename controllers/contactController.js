const Contact = require('../models/contact');

exports.createContact = (req,res) => {
    const c = new Contact({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        address : req.body.address,
        email : req.body.email
    })
    c.save().then((contact)=>{
        return res.status(201).json({contact})
    }).catch((error)=>{
        return res.status(400).json({error})
    })
}

exports.getContact = (req,res) =>{
    const id = req.body.id

    Contact.findOne(id).then((contact)=>{
        return res.status(201).json({contact})
    }).catch((error)=>{
        return res.status(400).json({error})
    }) 
}