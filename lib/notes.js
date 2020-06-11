'use strict';

const Request = require('./model/notes-schema.js');

class Note {
  constructor (options) {
    this.action = options.action;
    this.payload = options.payload;
    this.category = options.category;
  }
  execute() {
    switch(this.action) {
      case 'add':
        this.add();
        break;
      case 'list':
        this.list();
        // console.log ( `Future option`);
        break;
      case 'delete':
        console.log( `Future option`);
        break;
      default:
        console.log( 'That action is invalid. Try again.');
        break;
    }
  }

  add(){
    const newRequest = new Request({text: this.payload, category: this.category});
    newRequest.save()
      .then(results => console.log(`Adding note: ${this.payload}`))
      .catch(err => console.log(err));
  }

  list(){ 
    let findThis = {};
    if (this.category){
      findThis = {category: this.category};      
    }
    Request.find(findThis)
      .then(results => console.log('These are the find results: ', results))
      .catch(err => console.log(err));

  }

  delete(){
    Request.deleteMany({})
    .then(results => console.log('Deleted: ', results))
    .catch(err => console.log(err));

  }

}


  

module.exports = Note;

