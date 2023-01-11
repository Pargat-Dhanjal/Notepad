import React, { useState } from "react";

function CreateArea(props) {
  var [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handelChange(event) {
    setNote((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handelChange}
        />
        <textarea
          name="content"
          placeholder="Write a note..."
          rows="3"
          value={note.content}
          onChange={handelChange}
        />
        <button
          onClick={(event) => {
            props.add(note);
            setNote({
              title: "",
              content: "",
            });
            event.preventDefault();
          }}
        >
          +
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
