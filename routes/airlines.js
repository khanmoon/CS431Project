var express = require('express')
var router = express.Router()
router.get('/airlines',(req,res)=>res.json([{a:1,b:2}]))

module.exports = router