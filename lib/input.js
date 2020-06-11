'use strict';

const minimist = require('minimist');

// parse input from the user

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    const action = Object.keys(args)[1];
    let payload = Object.values(args)[1];
    let category = Object.values(args)[2];
    this.action = this.getAction(action);
    this.payload = this.getPayload(payload);
    this.category = this.getCategory(category);
  }

  valid() {
    return this.payload !=null && this.action != null;
  }

  getAction(action = '') {
    action = action.toLowerCase();
    let actions = {
      add: 'add',
      a: 'add',
      list: 'list', 
      l: 'list',
      delete: 'delete',
      d: 'delete'};
    for (let key in actions) {
      if (action === key){
        action = actions[key];
        return action;
      }
    }
    return null;
  } 

  getPayload(payload){
    if (typeof payload != 'string'){payload = null};
    return payload;
  }
  getCategory(category){
    if (typeof category != 'string'){category = null};
    return category;
  }

}

module.exports = Input;