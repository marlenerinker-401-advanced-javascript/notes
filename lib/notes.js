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
        this.delete();
        // console.log( `Future option`);
        break;
      default:
        console.log( 'That action is invalid. Try again.');
        break;
    }
  }

  add(){
    if (this.payload != null && this.category != null){
      const newRequest = new Request({text: this.payload, category: this.category});
      newRequest.save()
      .then(results => console.log(`Adding note: ${this.payload}`))
      .catch(err => console.log(err));
      return;
    }
    console.log('You must add the note text and a category.')
  }
    
  list(){ 
    let findThis = {};
    if (this.category){
      findThis = {category: this.category};      
    }
    Request.find(findThis)
      .then(results => {
        results.forEach((result) => {
          console.log(`
          ${result.text}
          Category: ${result.category}  ID: ${result._id}
          ----------------------------------------------------`)
        })
      })
      .catch(err => console.log(err));

  }

  delete(){
    Request.deleteOne({_id: this.payload})
    .then(results => console.log(`Deleted: ${this.payload}` ))
    .catch(err => console.log(err));

  }

}


  

module.exports = Note;

