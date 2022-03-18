const express = require("express")
const router = express.Router()

module.exports = router

router.get('/utilisateur/connexion', (req, res) => {
    res.render('user/connection')
});
router.get('/utilisateur/inscription', (req, res) => {
    res.render('user/signup')
});