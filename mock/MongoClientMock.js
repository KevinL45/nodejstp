
class MongoClientMock {

    constructor() {
        this.contactsMock = [
            {
                '_id' : 0,
                "firstName":"One",
                "lastName":"OneOne",
                "email":"one@email.com",
                "address":"One Address One apart"
            },
            {
                '_id' : 1,
                "firstName":"Two",
                "lastName":"TwoTwo",
                "email":"Two@email.com",
                "address":"Two Address Two apart"
            },
            {
                '_id' : 2,
                "firstName":"Three",
                "lastName":"ThreeThree",
                "email":"Three@email.com",
                "address":"Three Address Three apart"
            },            {

                '_id' : 3,
                "firstName":"Four",
                "lastName":"FourFour",
                "email":"Four@email.com",
                "address":"Four Address Four apart"
            },            {
                '_id' : 4,
                "firstName":"Five",
                "lastName":"FiveFive",
                "email":"Five@email.com",
                "address":"Five Address Five apart"
            }
        ]
    }

    findContact(id) {
        let contactMock = this.contactsMock
            .find(contact => contact._id == id)
        return contactMock
    }

    findAll() {
        return this.contactsMock
    }
}

module.exports = MongoClientMock