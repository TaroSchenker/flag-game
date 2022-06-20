const express = require('express')
const app = express()
const PORT = 3000

app.get('/country', (req, res) => {
    res.send('Hello Taro')
})




app.listen(PORT, () => console.log(`Listening on port ${PORT}`) )
