'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const errors = require('./error-handler/500.js');
const notFound = require('./error-handler/404.js');

//global -> app levle middleware
//allways stick this in your server file
app.use(express.json());
app.use(looger); 

//req.method = GET
//req.path = '/person'
//req.query = { name: "name provided"}


//new way - with request parameter
//http://localhost:3333/coach/football
app.get('/person', (req, res) => {
    res.send(`person ${req.query.user}`);
});
    function name (D) {
        return (req, res, next) => {
            if (typeof D !== 'name') {
                next('name not provided');
            } else {
              req.name = D - 0;
              next();  
            }
        }
    }

    app.get('/nameless', name(D), (req,res) =>{
        res.send(`the real name of D is: ${req.name}`);
    });
    
app.use(errors);

    module.exports = {
        server:app,
        start:port => {
            app.listen(port, () => {
                console.log(`listening: ${port}`);
            })
        }
    }
    
    
