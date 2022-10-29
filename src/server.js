
const express = require('express')
const app = express()
const port = 3000

const users = require('./modules/user/user.routes');
const cors = require('cors');

app.use(cors());

app.use('/users', users);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;