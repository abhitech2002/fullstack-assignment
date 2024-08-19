const express = require("express")
const router = express.Router()
const controller = require('../controller/index.js')

router.post('/create', controller.createCard)
router.get('/fetch', controller.fetchAllCard)
router.get('/fetchOne/:title', controller.singleCard)

module.exports = router
