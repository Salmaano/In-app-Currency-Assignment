const express = require('express')
const router = express.Router()
const {
  verifyToken
} = require('../../middlewares/auth');


const {
  makeUser, 
  login,
  buy,
  buyFeature
} = require('./user.controller');

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
router
    .put(
      '/buyFeature',
      verifyToken,
      buyFeature
    )

module.exports = router