//import express 
const express = require('express');
//import morgan (handling middleware)
const morgan = require('morgan');
//import mongoose (allows us to manipulate the database)
const mongoose = require('mongoose');
//import review module 
const Review = require('./models/reviews');
const Path = require('path');
const Form = require('./models/form');
const axios = require ('axios');
//body-parser
const bodyParser = require('body-parser');
//nodemailer
const nodemailer = require('nodemailer');

//express app 
const app = express();
const router = express.Router();

//connect to Mongodb
const dbURI = 'mongodb+srv://Windy:L1Gx2.fr023N.@cluster0.kprsc.mongodb.net/mmtuition?retryWrites=true&w=majority'
//{useNewUrlParser: true, useUnifiedTopology: true} arguments stops the deprecation warnings
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
//listen for request
    .then((result) => app.listen(3001))
    .catch((err) => console.log(err))

//register view engine
app.set('view engine', 'ejs');

//middleware and static files (CSS and images)
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//using middleware
app.use(morgan('dev'));

router.get('/form', (req, res) => {
    res.sendFile('bookNow.ejs');
    //To access GET variable use req.query() and req.params() methods.
})

app.use("/", router);


//bodyParser middleware 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//post form 

router.post('/form', (req, res) => {
    let fullName = req.form.fullName.value;
    let phone = req.form.phone.value;
    let email = req.form.email.value;
    let subject = req.form.subject.value;
    let comments = req.form.comments.value;
    
    const form = {
        from: "cindycheung1408@gmail.com", 
        to: "cindycheung1408@gmail.com",
        subject: "form submitted",
        text: message
    }

    transporter.sendMail(mail, (err, data) => {
        if(err) {
            res.json({
                status: 'fail'
            }) 
            }else {
                res.json({
                    status: 'success'
                })
            }
        }
    )

});


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


//data parsing
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post('/email', (req, res) => {
    //send email
    res.json({message: 'Message received!!'})
})

//defining a route with nodemailer

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'booknow.ejs'));
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
