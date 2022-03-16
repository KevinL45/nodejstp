const VCard =  require('vcard-creator').default
const Contact = require('../../entities/Contact.js')

class VCardGenerator {

    constructor() {
        this.vCard = new VCard()
    }

    generate(contact)  {
        if (contact == undefined) {
            throw new Error("contact undefined")
        }
        this.vCard.addName(contact.firstName, contact.lastName)
        this.vCard.addAddress(contact.adress)
        this.vCard.addEmail(contact.mail)
        return this.vCard.toString()
    }
}

module.exports = VCardGenerator