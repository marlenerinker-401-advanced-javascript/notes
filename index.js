'use strict';

// node modules
const Note = require('./lib/notes');
const Input = require('./lib/input');

const options = new Input();
const note = new Note();
note.execute(options);

