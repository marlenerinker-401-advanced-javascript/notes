'use strict';

const Note = require('../lib/notes.js');
const supergoose = require('cf-supergoose');

beforeAll(() => {
  supergoose.startDB();
})

afterAll(() => {
  supergoose.stopDB();
})

jest.spyOn(global.console, 'log');

describe('testing adding to database', () => {

  it('should log when no action', () => {
    let note = new Note({ action: null, payload: 'my note', category: 'school' });
    note.execute();
    expect(console.log).toHaveBeenCalledWith('That action is invalid. Try again.');
  });

  it('should log when no payload', () => {
    let note = new Note({ action: 'add', payload: null, category: 'groceries'});
    note.execute();
    expect(console.log).toHaveBeenCalledWith('You must add the note text and a category.');
  });

  it('should log when added note', (done) => {
    let note = new Note( { action: 'add', payload: 'my note', category: 'groceries'});
      note.execute()
    .then(() => {
      expect(console.log).toHaveBeenCalledWith('Adding note: my note')
      done();
    })


  });
});

describe('testing getting a list from the database', () => {

  it('should get a list of notes with specific category', () => {
    let note = new Note( { action: 'add', payload: 'my note', category: 'groceries'});
    note.execute()
    .then(() => {
      let note = new Note( { action: 'list', category: 'book'} );
      list.execute();
    })
    .then(() => {
      let list = new Note( { action: 'list', category: 'groceries'} );
      list.execute();
    })
    .then(() => {
      expect(console.log).toContain('groceries');
      expect(console.log).not.toContain('book');
    })
});
});

describe('testing deleting a note from the database', () => {

  it('should log note was deleted along with the id', () => {
    let note = new Note( { action: 'add', payload: 'my note', category: 'groceries'});
    note.execute()
    .then (result => {
    let deleteAction = new Note ( {action: 'delete', payload: result._id});
    deleteAction.execute();
    return result._id;   
    })
    .then(result => {
      expect(console.log).toHaveBeenCalledWith(`Deleted: ${result._id}`);
      
    })
   });
  });
