'use strict';

const modelCollection = require('./model/notes-collection.js');

class Note {
  constructor (options) {
    this.action = options.action;
    this.payload = options.payload;
    this.category = options.category;
  }
  execute() {
    switch(this.action) {
      case 'add':
        return this.add();
      case 'list':
        return this.list();
      case 'delete':
        return this.delete();
      default:
        console.log( 'That action is invalid. Try again.');
        break;
    }
  }

  add(){
    return modelCollection.create(this.payload, this.category);
  }
    
  list(){ 
    return modelCollection.get(this.category);
  }

  delete(){
    return modelCollection.delete(this.payload);
  }

}
  

module.exports = Note;

