const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const User = require('./models').User;
const Workout = require('./models').Workout;

const userRoutes = require('./routes/user');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/user', userRoutes);

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })

// var upload = multer({ storage: storage })