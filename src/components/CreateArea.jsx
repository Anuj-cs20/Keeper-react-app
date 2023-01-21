import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setNote((preValues) => ({ ...preValues, [name]: value }));
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  const [exp, setExp] = useState(false);
  function handleClick() {
    setExp(!exp);
  }

  return (
    <div>
      <form
        className="create-note"
        onMouseEnter={handleClick}
        onMouseLeave={handleClick}
      >
        {exp && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={exp ? "3" : "1"}
          onChange={handleChange}
          value={note.content}
        />
        {exp && <button onClick={submitNote}>Add</button>}
      </form>
    </div>
  );
}

export default CreateArea;
