// const fs= require('fs');

// // fs.writeFileSync('notes.txt', 'My name');

// fs.appendFileSync('notes.txt',' Hi there!');


// const validator = require('validator');
const chalk = require('chalk');

const yargs = require('yargs');
const notes = require('./notes');

// console.log(add(5, 7));

// console.log(getNotes());
// console.log(chalk.bold.blue.inverse('Success!'));

// console.log(validator.isEmail('andrew@example.com'));
// console.log(validator.isURL('http://hi.com'));

// console.log(process.argv[2]);

// const command = process.argv[2];

// if(command === 'add'){
//   console.log('Adding note')
// }else if(command === 'remove'){
//   console.log('Remove note')
// }

//Customize yargs version
yargs.version('1.1.0');
//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title:{
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
   notes.addNote(argv.title, argv.body)
  }
})
//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title:{
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }},
  handler (argv){
   notes.removeNotes(argv.title)
  }
})

//List command

yargs.command({
  command: 'list',
  describe: 'List nodes',
  handler () {
    notes.listNotes()
  }
})

//Read command

yargs.command({
  command: 'read',
  describe: 'Read nodes',
  builder: {
    title:{
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }},
  handler (argv) {
    notes.readNote(argv.title)
  }
})



// console.log(yargs.argv);
yargs.parse();