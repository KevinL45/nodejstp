const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');

/**
 * Dummy data
 */

async function insertDummyContactData(){
    try{
        await Contact.insertMany([
            {
                "firstName":"One",
                "lastName":"OneOne",
                "email":"one@email.com",
                "address":"One Address One apart"
            },
            {
                "firstName":"Two",
                "lastName":"TwoTwo",
                "email":"Two@email.com",
                "address":"Two Address Two apart"
            },
            {
                "firstName":"Three",
                "lastName":"ThreeThree",
                "email":"Three@email.com",
                "address":"Three Address Three apart"
            },            {
                "firstName":"Four",
                "lastName":"FourFour",
                "email":"Four@email.com",
                "address":"Four Address Four apart"
            },            {
                "firstName":"Five",
                "lastName":"FiveFive",
                "email":"Five@email.com",
                "address":"Five Address Five apart"
            }
        ]);
    } catch (err) {
        console.log('err' + err);
    }
}
insertDummyContactData();


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
