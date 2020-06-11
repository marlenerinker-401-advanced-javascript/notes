'use strict';

require('dotenv').config();

//set up mongoose
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('open', () => {
  console.log('connected to mongo');
});

// node modules
const Note = require('./lib/notes');
const Input = require('./lib/input');

try {
  const options = new Input();
  const note = new Note(options);
  note.execute();
} catch(error){
  console.log(error)
};

