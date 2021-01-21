const port = process.env.PORT || 5000;
const express = require('express');
const path = require('path');

const Backbone = require('backbone');

const cool = require('cool-ascii-faces');

const test = new Backbone.Model({
    title : 'test'
});

const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'));

app.get('/about', (req,res) => res.render('about'));

app.get('/contact', (req,res) => res.render('contact'));

app.get('/cool', (req, res) => res.send(cool()))

app.get('/mathjs', (req,res) => res.render());

app.listen(port, function(){
    console.log(test);
    console.log(`Listening on ${ port }`)
});
