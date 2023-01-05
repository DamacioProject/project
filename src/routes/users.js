const express = require('express')
const { createUserService } = require('../services/post')
const router = express.Router()

router.post("", createUserService)

module.exports = router