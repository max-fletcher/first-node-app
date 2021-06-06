const express = require('express')
const router = express.Router()
const {login} = require('../controllers/auth')

// POST method using Form. Can be only tested using HTML form.
router.post('/', login)

module.exports = router
