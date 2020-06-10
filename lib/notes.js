// works for proof of concept; needs some refactoring and improvements
// it should export a constructor function
// execute should be a prototype method
// 'add' case:
//   Write a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed

class Note {
  execute(options) {
    switch(options.action) {
      case 'add':
        this.add(options.payload);
        break;
      case 'list':
        return ( `Future option`);
      case 'delete':
        return( `Future option`);
      default:
        return( 'That action is invalid. Try again.');
    }
  }

  add(payload){
    let note = {
      text: payload,
      id: Math.floor(Math.random() * 1000)
    }
    console.log('Adding note:', note.text);
    return note;
  }

}

module.exports = Note;

