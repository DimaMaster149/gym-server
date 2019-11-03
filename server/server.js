const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const multer = require('multer');
const User = require('./models').User;
const Workout = require('./models').Workout;

const userRoutes = require('./routes/user');
const exerciseRoutes = require('./routes/exercise');
const workoutRoutes = require('./routes/workout');

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/user', userRoutes);
app.use('/api/exercise', exerciseRoutes);
app.use('/api/workout', workoutRoutes);


app.listen(PORT, () => {
  console.log('app listen on port ' + PORT);
});
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })

// var upload = multer({ storage: storage })