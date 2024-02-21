const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')
const { engine } = require("express-handlebars");

const port = 4001
// Static file
app.use(express.static(path.join(__dirname, 'public')))
// HTTP Logger
app.use(morgan('combined'))
// Template Engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs'); 
app.set('views', path.join(__dirname, 'resources/views'));
console.log('PATH:' + path.join(__dirname, 'resources/views'));
// Định nghĩa route
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})