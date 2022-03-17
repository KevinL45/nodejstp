const Contact = require("../entities/Contact");
const MongoClientMock = require('../mock/MongoClientMock')

class ContactService {

    constructor() {
        this.mongoClient = new MongoClientMock()
    }

    getContact(id) {
        let contactMock = this.mongoClient.findContact(id)
        return contactMock;
    }

    getAll() {
        return this.mongoClient.findAll()
    }


}

module.exports = ContactService