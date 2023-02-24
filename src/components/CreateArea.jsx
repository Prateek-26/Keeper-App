import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "title") {
      setNote((prevValue) => {
        return {
          title: value,
          content: prevValue.content
        };
      });
    } else if (name === "content") {
      setNote((prevValue) => {
        return {
          title: prevValue.title,
          content: value
        };
      });
    }
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={() => {
            props.addNote(note);
            setNote({
              title: "",
              content: ""
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
