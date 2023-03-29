const express = require('express')
const post = require("../controller/post")
const get   = require("../controller/get")
const router = express.Router();

router.post('/api/post',post)
router.get('/api/get',get)


module.exports = router;