const express = require('express')
// On crée un router crée des routes
const router = express.Router()
const userCtrl = require('../controllers/user.controller')
const passwordCheck = require('../middleware/password')

//
router.post('/signup', passwordCheck, userCtrl.signup)
router.post('/login', userCtrl.login)

// On exporte les router pour app.js
module.exports = router