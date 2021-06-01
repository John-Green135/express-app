const express = require('express');
const router = express.Router();
const cors = require('cors');
const Tubes = require('../../Json/tubes.json')

const getTubeCateogies = ()=>{
    let list = []
    Tubes.forEach(tube=>{
        tube.Category.forEach(cat=>{
            if(!list.includes(cat)){
                list.push(cat)
            }
        })
    })
    return list
}

router.get('/', cors(), (req, res)=>{
    let list = []

    if(req.query.category ==="All"){
        list = Tubes
    }else{
        Tubes.forEach(tube=>{
            if(tube.Category.includes(req.query.category)){
                list.push(tube)
            }
        })
    }

    let data = {
        tubes: list,
        categories: getTubeCateogies()
    }
    res.json(data)
  })

  module.exports = router;