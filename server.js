// Imports
const express = require('express');
const db = require('');
const routes = require('');

// Gets the current working directory of the Node.js process and stores it in the variable `cwd`
cwd = process.cwd();

// Sets up the Express application to listen on a specified port
const PORT = process.env.PORT || 3001;
const app = express();

// Adds middleware to the Express application for handling incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Runs server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})
