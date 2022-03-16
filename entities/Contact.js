class Contact  {

    constructor() {
        this.firstName = ''
        this.lastName = ''
        this.mail = ''
        this.adress = ''
    }

    setfirstName(n) {
        this.firstName = n
    }

    getfirstName() {
        return this.firstName
    }

    setlastName(surName) {
        this.surName = surName
    }

    getlastName() {
        return this.surname
    }

    setmail(mail) {
        this.mail = mail
    }

    getmail() {
        return this.mail
    }

    setadress(adress) {
        this.adress = adress
    }

    getadress() {
        return this.adress
    }
}

module.exports = Contact

