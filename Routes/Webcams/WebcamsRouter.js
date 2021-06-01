const express = require('express');
const router = express.Router();
const cors = require('cors');
const Tubes = require('../../Json/tubes.json')

const ChaturbateScrape = require('../../Scrapers/chaturbateScrape')

router.get('/', cors(), (req, res)=>{
   ChaturbateScrape(req.query).then(value=>{
        res.json(value)
   })
})

  module.exports = router;