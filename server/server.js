const express = require('express');
const fs = require('fs');
const hbs = require('hbs');
const port = process.env.PORT || 3000
const path = require('path');

var app = express();

// CONFIG:
  // handlebars:
  hbs.registerPartials('./views/partials');
  // views
  app.set('view engine', 'hbs');
  app.set('views', './views')
  // port
  app.listen(port, () => {
  	console.log(`connected on port ${port}`);
  });
  // exports:
  module.exports.app = app;

// ROUTES:
  // GET:
  app.get('/', (req, res) => {
    res.send('hello')
    // res.render('home.hbs', {
    //   hello: 'hello'
    // });
  });
  // MIDDLEWARE:
    // server log
    // app.use((req, res, next) => {
    //   var now = new Date().toString();
    //   var log = `${now} : ${req.method} ${req.url}`
    //   console.log(log);
    //   fs.appendFileSync('server.log', log + '\n', (err) => {
    //     if (err) {
    //       console.log(`unable to append to server.log`);
    //     }
    //   });
    //   next();
    // });
    // // maintainence warning
    // // app.use((req, res, next) => {
    // //   res.render('maintainence.hbs');
    // // });
    // // static directory
    // app.use(express.static(__dirname + `/public`));

// HELPERS:
  // HBS:
  // hbs.registerHelper('getCurrentYear', () => {
  //   return new Date().getFullYear()
  // });
  //
  // hbs.registerHelper('upCase', (text) => {
  //   return text.toUpperCase();
  // });
