'use strict';

const mongoose = require('mongoose');

const notes = new mongoose.Schema({
  text: {type: String, required: true},
  category: {type: String, required: true}
});

module.exports = mongoose.model('note', notes);