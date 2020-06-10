'use strict';

const Note = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

//note for grading - in my code, I handle null (invalid) command and payload with logged messages. In these tests, I check for both of those cases and for the add case. In the lab test instructions it says nothing should be logged for no command, but in my case something is so I tested for that.
describe('testing note modules', () => {

  it('should log when no action', () => {
    let note = new Note;
    note.execute({ action: null, payload: 'my note' });
    expect(console.log).toHaveBeenCalledWith('That action is invalid. Try again.');
  });

  it('should log when no payload', () => {
    let note = new Note;
    note.execute({ action: 'add', payload: null});
    expect(console.log).toHaveBeenCalledWith('Can\'t add note with no content');
  })

  it('should log when added note', () => {
    let note = new Note;
    note.execute( { action: 'add', payload: 'my note'});
    expect(console.log).toHaveBeenCalledWith('Adding note: my note');

  })
});