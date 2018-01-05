const mongoose = require('mongoose');
const herokuMongoURI = 'mongodb://heroku_wkwxbdvp:rb7p43plsgl2updmho1hvh77d1@ds239387.mlab.com:39387/heroku_wkwxbdvp';

module.exports.connect = (uri) => {
  //if you need to run locally, comment out uri = horkuMongoURI line
  uri = herokuMongoURI;
  mongoose.connect(uri);
  // plug in the promise library:
  mongoose.Promise = Promise;


  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  // load models
  require('./user');
};
