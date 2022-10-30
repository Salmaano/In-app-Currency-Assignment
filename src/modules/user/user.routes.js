const express = require('express')
const router = express.Router()
const {
  verifyToken
} = require('../../middlewares/auth');


const {
  makeUser, 
  login,
  buy
} = require('./user.controller');

//does the following everytime you hit the router
// // middleware that is specific to this router
// router.use((req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// })

router
  .post(
    '/signup',
    makeUser
  )

router
    .post(
      '/login',
      login
    )

router
    .post(
       '/buyPoints',
       verifyToken,
       buy 
    )
// define the about route
router.get('/about', (req, res) => {
  res.send('About Users')
})

module.exports = router