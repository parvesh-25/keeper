import React from "react";


function Note(props) {
  function handleClick() {
    // props.onDelete adalah function deleteNote, dan props.id adalah id dari itemnya 
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
