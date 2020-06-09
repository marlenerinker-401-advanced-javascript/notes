'use strict';

const minimist = require('minimist');


// want to parse input from the user

function Input() {
  const args = minimist(process.argv.slice(2));
  this.action = this.getAction(process.argv[2]);
  this.payload = process.argv[3];
}

Input.prototype.getAction = function (action = '') {
  action = action.replace(/-/g, '').toLowerCase();
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

module.exports = Input;