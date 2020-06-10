# Notesy

This project contains simple Node Modules meant to run in the terminal.


### Author: Marlene Rinker

- [submission PR](https://github.com/marlenerinker-401-advanced-javascript/notes/pull/1)
<!-- - [tests report](https://github.com/tutuorial-401js/class-00/actions) -->
<!-- - [front-end](https://tutorial-401js.herokuapp.com/) -->

### Setup

<!-- #### `.env` requirements -->

<!-- - `PORT` - Port Number -->

#### Running the app

options are: --add or -a

```
node index.js --add 'this is my note'
```
It returns a message in the terminal that it added your note.


#### Tests

- Unit Tests: `npm test input.test.js`, `npm test notes.test.js`
- Assertions Made
  - Testing if user input is valid or invalid
  - Testing if Input object is created with valid action and payload
  - Testing if get correct log message when add a note, use an invalid command, or don't enter a payload (note content)

#### UML

![UML Diagram](notesy.jpg)