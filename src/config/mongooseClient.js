const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://appNo478:appCurrent__90@cluster0.13h0bwx.mongodb.net/test').
  catch(error => handleError(error));

  module.exports = mongoose;