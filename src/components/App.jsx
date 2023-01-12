import React, { useEffect, useState } from "react";
import Header from "./Header";
import Notes from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function getNotes() {
  var notes = localStorage.getItem("notes");
  if (notes) {
    return JSON.parse(notes);
  } else {
    return [];
  }
}

function App() {
  var [notes, setNotes] = useState(getNotes());

  function addNote(note) {
    notes.push(note);
    setNotes([...notes]);
  }

  function deleteNote(id) {
    notes.splice(id, 1);
    setNotes([...notes]);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {notes.map((note, index) => {
        return (
          <Notes
            key={index}
            heading={note.title}
            content={note.content}
            delete={deleteNote}
            id={index}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
