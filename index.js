// Modules and Globals
require("dotenv").config();
const express = require("express");
const methodOverride = require('method-override')
const app = express();

// Express settings
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Controllers and Routes
app.use('/places', require('./controllers/places'))

app.get("/", (req, res) => {
  res.render('home');
});

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
