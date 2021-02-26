'use strict';

const logger = (req, res, next) => {
    console.log(`REQ PATH:`, req.path);
    console.lot(`REQ METHOD:`, req.method);
    next(); //moves to the next piece of middleware -> if none, it's 
}

module.exports = logger;

// on any incoming request we are log on the server what the request method and reqest path was!