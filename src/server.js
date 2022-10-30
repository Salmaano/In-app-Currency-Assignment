
const express = require('express')
const app = express()
const port = process.env.API_PORT

const users = require('./modules/user/user.routes');
const cors = require('cors');

app.use(cors());
//allows express to handle json payloads in requests
app.use(express.json());

app.use('/users', users);


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

module.exports = app;