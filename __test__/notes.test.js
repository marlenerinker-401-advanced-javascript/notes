'use strict';

const Note = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

// These tests fail now that we're using mongoose. When I add the config that mongoose says is needed (I got a warning from mongoose when I run the tests that it won't work with jest and the way to fix it was to add the config file), then I get a message that tests can't be run after the jest environment is torn down. 
describe('testing note modules', () => {

  it('should log when no action', () => {
    let note = new Note({ action: null, payload: 'my note', category: 'school' });
    note.execute();
    expect(console.log).toHaveBeenCalledWith('That action is invalid. Try again.');
  });

  it('should log when no payload', () => {
    let note = new Note({ action: 'add', payload: null, category: 'groceries'});
    note.execute();
    expect(console.log).toHaveBeenCalledWith('You must add the note text and a category.');
  })

  it('should log when added note', () => {
    let note = new Note( { action: 'add', payload: 'my note'});
    note.execute();
    expect(console.log).toHaveBeenCalledWith('Adding note: my note');

  })
});