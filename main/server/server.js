const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 4030
const countryData = require('./data.js')
const e = require('express')
console.log(countryData)


app.use(bodyParser.json());


app.get('/country', (req, res) => {
    res.send(countryData)
})

app.get('/country/name/:name', (req, res) => {
    const countryName = req.params.name;
    for(let i = 0; i < countryData.length; i++){
        if(countryData[i].name.common === countryName){
            console.log('found your country')
            res.send(countryData[i])
        } else{
            res.send('country not found')
        }
    }
})



app.listen(PORT, () => console.log(`Listening on port ${PORT}`) )
