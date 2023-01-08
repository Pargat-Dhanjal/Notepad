import React from "react";
import notes from "../notes";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.heading}</h1>
      <p>{props.note}</p>
    </div>
  );
}

function CreateNote() {
  return notes.map((note) => (
    <Note key={note.key} heading={note.title} note={note.content} />
  ));
}

export default CreateNote;
