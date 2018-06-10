const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials')
var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));



app.use( (req, res, next) => {
    var now = new Date().toString();
    console.log(`${now}: ${req.method} ${req.url}`);
    next();

});


app.use ( (req, resp, next) => {
    resp.render('maintenance');
    });
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})



app.get('/',(req,res)=>{
    res.render('home', {
        pageTitle : 'About page',
        currentYear : new Date().getFullYear(),
        welcomeMessage: 'Hello ziom'
    });
    });

app.get('/about',(req,res)=>{
res.render('about', {
    pageTitle : 'About page',
    currentYear : new Date().getFullYear()
});
});

app.listen(port);
