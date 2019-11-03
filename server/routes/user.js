const { Router } = require('express');
const router = Router();
const models = require('../models/index');
// const User = models.Sequelize.User;

router.get('/', async (req, res) => {
  // try {
  //   const user = await models.User.create({
  //     username: 'Vasya2'
  //   });
  //   res.status(201).json({
  //     user
  //   })
  // } catch (e) {
  //   console.log(e);
  //   res.status(500).json({
  //     message: 'Server error'
  //   })
  // }
});

router.post('/', (req, res) => {
  
});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;