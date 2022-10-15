const fs = require("fs");
const chalk = require('chalk');


const addNote =  (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter( (note) => note.title === title );
  const duplicateNote = notes.find((note) => note.title === title);


  if(!duplicateNote){
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added'));
  }else{
    console.log(chalk.red.inverse('Note title taken'));
  }


}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
  try{
    const dataBuffer = fs.readFileSync('notes.json');
    const  dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }catch (e){
    return []
  }
}

const removeNotes = (title) => {
  const notes = loadNotes();
  const result = notes.filter((item)=>item.title !== title);
  if(notes.length > result.length){
    console.log(chalk.bold.green('Note removed!'));
    saveNotes(result);
  }else{
    console.log(chalk.bold.red('No note found!'));
  }
}


const listNotes = () =>{
  const data = loadNotes();
  console.log(chalk.bold.blue("Your notes"));
  data.forEach(element => {
     console.log( element.title);
  });
}

const readNote = (title) =>{
  const data = loadNotes();
  const text = data.find((item)=> item.title === title);
  if(text){console.log(chalk.bold.blue(text.title));
  console.log(text.body);
}else{
  console.log(chalk.red.bold("No note found"));
}
}

module.exports = {
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNote: readNote
};