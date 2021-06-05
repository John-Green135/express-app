const express = require('express');
const router = express.Router();
const cors = require('cors');

const Females = require('../../Json/pornstars.json')
const Trans = require('../../Json/shemales.json')


const findModels = (arr, search, res)=>{
    let list = []
    arr.forEach(model=>{
        if(model.Name.toLowerCase().includes(search)){
            list.push(model)
        }
    })
    console.log("Find Models", list.length)
    res.json({
        modelList: list,
        bodyTypes: []
    })
}


router.get('/', cors(), (req, res)=>{
    let list = []
    
    switch (req.query.gender) {
        case "All": 
            list = findModels([...Females.Pornstars, ...Trans.Pornstars], req.query.search, res)
            break;

        case "Female":
            list = findModels(Females.Pornstars, req.query.search, res)
            break;

        case "Trans":
            list = findModels(Trans.Pornstars, req.query.search, res)
            break;
            
        default:
            break;
    }
  })

  router.get('/profile/:model', cors(), (req, res)=>{
      Females.Pornstars.forEach(model=>{
          let adjustedName = model.Name.toLowerCase().replace(/ /g, "-")
          if(adjustedName === req.params.model){
              res.json(model)
              return
          }
      })
  })

  module.exports = router