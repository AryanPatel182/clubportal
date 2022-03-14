const express = require('express');
// const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

const app=express();



const dbURI = process.env.MONGOODE_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })   
    .then(console.log("connected"))
    .then((result) => app.listen(3000))    
    .catch((err) => console.log(err));


const homeRoutes = require('./routes/homeRoutes');
const clubRoutes = require('./routes/clubRoutes');
const eventRoutes = require('./routes/eventRoutes');

// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use('/home', homeRoutes);

app.use('/club', clubRoutes)

app.use('/event', eventRoutes)

app.use((req, res) => {
    res.status(404).render('404', { titles: '404' });
});

