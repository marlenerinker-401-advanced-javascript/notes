'use strict';

jest.mock('minimist');
const minimist = require('minimist');

const Input = require('../lib/input.js');

describe('Testing the Input module with valid input', () => {
  
  it('valid input should return true', () => {
    minimist.mockImplementation(() => {
      return {
        _: [],
        add: 'this is my note',
      }
    });
    let options = new Input();
    expect(options.valid()).toEqual(true);
  });
  it('object is created with action and payload', () => {
    minimist.mockImplementation(() => {
      return {
        _: [],
        add: 'this is my note',
      }
    });
    let options = new Input();
    let expectedOptions = { action: 'add', payload: 'this is my note'};
    expect(options).toEqual(expectedOptions);
  })
});



describe('Testing the Input module with invalid input', () => {
  
  it('valid input should return false', () => {
    minimist.mockImplementation(() => {
      return {
        _: [],
        purple: 'this is my note',
      }
    });
    let options = new Input();
    console.log(options);
    expect(options.valid()).toEqual(false);
  })
  });