const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://habraham:3RutXoHaE2Nmhtbm@cluster0.auuwo.mongodb.net/mernshopping?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
