const express = require('express')
const router = express.Router()

//does the following everytime you hit the router
// // middleware that is specific to this router
// router.use((req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// })

router.get('/', (req, res) => {
  res.send('Users Home Page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About Users')
})

module.exports = router