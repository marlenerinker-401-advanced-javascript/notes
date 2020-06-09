// works for proof of concept; needs some refactoring and improvements
// it should export a constructor function
// execute should be a prototype method
// 'add' case:
//   Write a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed

function execute(options){
  switch(options.action) {
    case 'add':
      console.log( `Adding note: ${options.payload}`);
      break;
    case 'list':
      console.log( `Future option`);
      break;
    case 'delete':
      console.log( `Future option`);
      break;
    default:
      console.log( 'We couldn\'t do that. Try again.');
  }
  
}

module.exports = execute;

