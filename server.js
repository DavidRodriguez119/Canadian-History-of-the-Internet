const express = require('express');

//use the word router instead of express.Router()
const router = express.Router();

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

//Configure Handlebars as the template engine
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Import routes and give the server access to them.    
