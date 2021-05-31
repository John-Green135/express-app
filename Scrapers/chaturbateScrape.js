const cheerio = require('cheerio')
const fetch = require('node-fetch')

const fetchData = async(url)=>{
    let request = await fetch(url)
    let response = await request.text()
    return response
}

const ChaturbateScrape = (req, res)=>{
    let path = `https://chaturbate.com/` 
    console.log(req.query)
    fetchData(path) 
    .then(body=>{
        let $ = cheerio.load(body)
        let dataList = []
        let tagList = []
        $('.room_list_room').each( (index, value)=>{
            let data = {}
            let div = $(value)
            data.modelName = div.find('.details .title a').text()
            data.image = div.find('a img').attr('src')
            data.link = `https://chaturbate.com${div.find('a').attr('href')}`

            let linkLi = div.find('.details .subject li a').text()
            let linkArray = linkLi.split("#")
            linkArray.forEach(tag=>{
                if(!tagList.includes(tag) && tag !== ""){
                    tagList.push(tag)
                }
            })
            
            dataList.push(data)
        })

        if(dataList.length > 100){
            dataList.length = 100
        }
        res.json({
            dataList: dataList,
            tags: tagList
        })
    })
}

const getPath = (queries) =>{
    if(queries.tag === "none"){
        return `${queries.gender}-cams/`
    }else{
        let path
        switch (queries.gender) {
            case "female":
                path = `tag/${queries.tag}/f/`
                break;
            case "trans":
                path = `tag/${queries.tag}/s/`
                break;
            case "male":
                path = `tag/${queries.tag}/m/`
                break;
            case "couple":
                path = `tag/${queries.tag}/c/`
                break;
        
            default:
                break;
        }
        return path
    }   
}


module.exports = ChaturbateScrape
