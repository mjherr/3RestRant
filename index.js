require('dotenv').config()
const express = require('express')
const app = express()

//views
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//controllers
app.use('/places', require('./controllers/places'))

//homepage
app.get('/', (req, res) => {
    res.render('Home')
})

//places
app.get('/', (req,res) => {
    res.render('place/index')
})

//wildcard
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
