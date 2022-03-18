const express = require("express")
const router = express.Router()
const qrCode = require('qrcode');
const VCardGenerator = require('../js/VCardGenerator');
const ContactService = require('../services/ContactService')


module.exports = router

router.get('/', (req, res) => {
    let contactService = new ContactService()
    let contacts = contactService.getAll()
    res.render('home/home', {contacts : contacts})
});
router.get('/contact', (req, res) => {
    res.render('contact/list', {contacts : undefined})
});

router.get('/contact/creer', (req, res) => {
    res.render('contact/addOrEdit', {contact: undefined})
});

router.get('/contact/modifier', (req, res) => {
    res.render('contact/addOrEdit', {contact: undefined})
});

router.get('/contact/detail/:id', (req, res) => {

    let contactService = new ContactService()
    let vcard = new VCardGenerator()
    let contact = contactService.getContact(req.params.id)
      
    qrCode.toDataURL(vcard.generate(contact),function (err,url){
        res.render('contact/details', {contact: contact, qrCode : url})
    })



});