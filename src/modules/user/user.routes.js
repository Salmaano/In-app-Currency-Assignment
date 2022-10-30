const express = require('express')
const router = express.Router()


const {
  makeUser
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
    makeUser,
    () => {
      console.log('just to check if try catch actuall works');
    }
  )
// define the about route
router.get('/about', (req, res) => {
  res.send('About Users')
})

module.exports = router