var assert = require('assert');
const Contact = require('../entities/Contact.js');
const VCardGenerator = require ('../js/generator/VCardGenerator.js')
const QrCodeGenerator = require ('../js/generator/QrCodeGenerator.js') 
const mongoose = require('mongoose');
const contactSchema = require('../models/contact.model');


describe('test', function () {
    let vCardGenerator = new VCardGenerator()
    assert.notEqual(vCardGenerator, undefined)

    console.log("test")

    // test 
    let contactMock = new Contact()
    contactMock.firstName = "test"
    contactMock.lastName = "doe"
    contactMock.adress = '45 allée des fkjhfuijfhg'
    contactMock.mail = 'jjfgjrgfh@dfbhfhf.fr'
    console.log(contactMock)

    // test 2

    let vCardContactMock =vCardGenerator.generate(contactMock)
    console.log(vCardContactMock)

    // // test 3
    // let qrCodeGenerator = new QrCodeGenerator()
    // qrCodeGenerator.generateToTempFile(vCardContactMock)

    // test Model
  // let Contact = mongoose.model("Contact", contactSchema);
  //   let contact = new Contact( {
  //     '_id' : 4,
  //     "firstName":"Five",
  //     "lastName":"FiveFive",
  //     "email":"Five@email.com",
  //     "address":"Five Address Five apart"
  // });
  //   console.log(contact)
  
  });