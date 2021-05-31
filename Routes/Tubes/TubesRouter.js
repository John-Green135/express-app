const express = require('express');
const router = express.Router();
const cors = require('cors');
const Tubes = require('../../Json/tubes.json')

router.get('/', cors(), (req, res)=>{
    let data = {
        tubes: Tubes
    }
    res.json(data)
  })

  module.exports = router;