//import express 
const express = require('express');
//import morgan (handling middleware)
const morgan = require('morgan');
//import mongoose (allows us to manipulate the database)
const mongoose = require('mongoose');
//import review module 
const Review = require('./models/reviews');

const Form = require('./models/form');
//const { Router } = require('express');
 
//express app 
const app = express()

//connect to Mongodb
const dbURI = 'mongodb+srv://Windy:L1Gx2.fr023N.@cluster0.kprsc.mongodb.net/mmtuition?retryWrites=true&w=majority'
//{useNewUrlParser: true, useUnifiedTopology: true} arguments stops the deprecation warnings
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
//listen for request
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

//register view engine
app.set('view engine', 'ejs');

//middleware and static files (CSS and images)
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//using middleware
app.use(morgan('dev'));


//routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/booknow', (req, res) => {
    res.render('booknow');
});

app.get('/results', (req, res) => {
    res.render('results');
});

app.get('/whyus', (req, res) => {
    res.render('whyus');
});

app.get('/contactus', (req, res) => {
    res.render('contactus');
});
//review route

app.get('/reviews', (req, res) => {
    Review.find().sort({createdAt: -1})
    .then((result) => {
        res.render('reviews', {reviews: result})
    })
    .catch((err) => {
        console.log(err);
    })
});

app.get('/form', (req, res) => {
    Form.find().sort({createdAt: -1})
    .then((result) => {
        res.render('form', {form: result})
    })
});

//Router.get('/table', (req, res) => {
//    res.render('./views/table.html')
//});

//POST handler

app.post('/reviews', (req, res) => {
    const review = new Review(req.body);
    
    review.save()
    .then((result) => {
        res.redirect('/reviews')
    })
    .catch((err) => {
        console.log(err);
    })
});

app.post('/form', (req, res) => {
    const form = new Form(req.body);

    form.save()
    .then((result) => {
        res.redirect('/formsubmitted')
    })
    .catch((err) => {
        console.log(err)
    })
});

app.get('/reviews', (req, res) => {
    //const blog = [
       // {review: 'had a fun lesson'},
        //{review: 'I have learnt a lot!'},
        //{review: 'making learning fun!'}
    // ];
    res.render('reviews', {review: 'incredible lesson'});
});


//404 page 
app.use((req, res ) => {
    res.status(404).render('404');
});
