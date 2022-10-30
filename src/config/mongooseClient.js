const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).
  catch(error => handleError(error));

  module.exports = mongoose;