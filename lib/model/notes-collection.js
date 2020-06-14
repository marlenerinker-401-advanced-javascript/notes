'use strict';

const Request = require('./notes-schema.js');

class DBInterface {
  constructor(schema) {
    this.schema = schema
  }

  create(payload, category){
    if (payload != null && category != null){
      const newRequest = new this.schema({text: payload, category: category});
      return newRequest.save()
      .then(results => {
        console.log(`Adding note: ${payload}`)
        return results})
      .catch(err => console.log(err));
    }
    console.log('You must add the note text and a category.');
  }

  get(category){
    let findThis = {};
    if (category){
      findThis = {category: category};      
    }
    return this.schema.find(findThis)
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

  delete(payload){
    return this.schema.deleteOne({_id: payload})
    .then(results => console.log(`Deleted: ${payload}` ))
    .catch(err => console.log(err));
  }
}

let useDbInterface = new DBInterface(Request);
module.exports = useDbInterface;