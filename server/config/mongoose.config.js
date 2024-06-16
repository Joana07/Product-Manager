const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ProductManager');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Established a connection to the database');
});
