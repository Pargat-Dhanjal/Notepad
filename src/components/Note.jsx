import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
      <button onClick={()=> {
        props.delete(props.id);
      }}>Delete</button>
    </div>
  );
}


export default Note;
