'use strict';

const Note = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

// these tests fail now that we're using mongoose. when i add the config that mongoose says is needed (I get a warning from mongoose when I run the tests that it won't work with jest), then I get a message that tests can't be run after the jest environment is torn down. Not sure how I'm suppose to test this.
describe('testing note modules', () => {

  it('should log when no action', () => {
    let note = new Note({ action: null, payload: 'my note', category: 'school' });
    note.execute()
    .then (expect(console.log).toHaveBeenCalledWith('That action is invalid. Try again.'))
    .catch(err => console.log(err));
    // expect(console.log).toHaveBeenCalledWith('That action is invalid. Try again.');
  });

  it('should log when no payload', () => {
    let note = new Note({ action: 'add', payload: null, category: 'groceries'});
    note.execute()
    .then(expect(console.log).toHaveBeenCalledWith('Invalid input. Try again.'))
    .catch(err => console.log(err));
    // expect(console.log).toHaveBeenCalledWith('Invalid input. Try again.');
  })

  it('should log when added note', () => {
    let note = new Note( { action: 'add', payload: 'my note'});
    note.execute()
    .then(expect(console.log).toHaveBeenCalledWith('Adding note: my note'))
    .catch(err => console.log(err));
    // expect(console.log).toHaveBeenCalledWith('Adding note: my note');

  })
});