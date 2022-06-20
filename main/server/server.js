const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000
const countryData = require('./data.js')
console.log(countryData)


app.use(bodyParser.json());


app.get('/country', (req, res) => {
    res.send(countryData)
})

app.get('/country/name/:name', (req, res) => {
    const countryName = req.params.name;
    const foundCountry = countryData.filter((country) => console.log(country))
    console.log(foundCountry)
    res.send(countryData[0].name)

})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`) )
