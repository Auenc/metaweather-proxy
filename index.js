const express = require('express')
const axios = require('axios')
const app = express()
const port = process.env.PORT || 3001

app.use((req, res, next) => {
    const url = `https://www.metaweather.com${req.originalUrl}`
    console.log(url)
    axios.get(url)
    .then(response => {
        console.log(response.data)
        res.json(response.data)
    })
    .catch(e => console.error("err", e.message))
})

app.listen(port, () => {
    console.log('Listening on ', port)
})