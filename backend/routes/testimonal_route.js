const express = require('express')
const router = express.Router()

const {addTestimonal , getTestimonal} = require('../controller/Testimonal_controller')

router.get('/',getTestimonal)
router.post('/add',addTestimonal)

module.exports = router;