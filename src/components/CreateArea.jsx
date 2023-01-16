import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  var [note, setNote] = useState({
    title: "",
    content: "",
  });

  var [focus, setFocus] = useState(false);

  function handelChange(event) {
    var { name, value } = event.target;
    setFocus(true);
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form className="create-note">
        {focus && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handelChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                props.add(note);
                setNote({
                  title: "",
                  content: "",
                });
                setFocus(false);
              }
            }}
          />
        )}
        <textarea
          name="content"
          placeholder="Write a note..."
          rows={focus ? 3 : 1}
          value={note.content}
          onChange={handelChange}
        />
        <Zoom in={focus}>
          <Fab
            onClick={(event) => {
              event.preventDefault();
              props.add(note);
              setNote({
                title: "",
                content: "",
              });
              setFocus(false);
            }}
          >
            <AddIcon className="icons" />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
