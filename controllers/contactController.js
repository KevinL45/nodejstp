const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');


router.get('/', (req, res) => {
    res.render('contact/addOrEdit',{
        viewTitle: 'Ajouter Contact'
    })
});

router.post('/', (req, res) => {
    if (req.body._id == '') {
        insertRecord(req, res)
    } else {
        updateRecord(req, res)
    }
});

function insertRecord(req, res) {
    var contact = new Contact();
    contact.firstName = req.body.firstName;
    contact.lastName = req.body.lastName;
    contact.email = req.body.email;
    contact.address = req.body.address;
    contact.save((err, doc) => {
        if(!err) {
            res.redirect('contact/list')
        } else {
            console.log('ERROR during insert:  ' +err)
        }
    })
}

function updateRecord(res, req) {
    Contact.findOneAndUpdate({_id: req.body._id}, req.body,
        {new: true}, (err, doc)=>
    {
        if(!err){
            res.redirect("contact/list");
        } else {
            console.log("ERROR during update: " +err);
        }
    });
}

router.get('/list', (req, res) => {
    Contact.find((err, docs) => {
        if (!err) {
            res.render('contact/list', {
                list: docs
            })
        } else {
            console.log('ERROR in retrieval: ' +err)
        }
    })
});

router.get('/:id', (req, res) => {
    Contact.findById(req.params.id, (err, doc) => {
        if(!err) {
            res.render('contact/addOrEdit', {
                viewTitle: 'Modifier Contact',
                contact: doc
            })
            console.log(doc);
        }
    });
});

router.get('delete/:id', (req, res) => {
    Contact.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err) {
            res.redirect("contact/list");
        } else {
            console.log("ERROR in deletion" +err);
        }
    });
});
