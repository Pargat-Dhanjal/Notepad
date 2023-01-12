import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
      <button onClick={()=> {
        props.delete(props.id);
      }}><DeleteIcon className="icons" /></button>
    </div>
  );
}


export default Note;
