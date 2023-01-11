import React, { useState } from "react";
import Header from "./Header";
import Notes from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  var [notes, setNotes] = useState([]);

  function addNote(note) {
    notes.push(note);
    setNotes([...notes]);
  }

  function deleteNote (id) {
    notes.splice(id,1)
    setNotes([...notes]);
  }


  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {notes.map((note, index) => {
        return (
          <Notes key={index} heading={note.title} content={note.content} delete={deleteNote} id={index} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
