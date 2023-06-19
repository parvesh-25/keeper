import React from "react";
import { Icon } from '@iconify/react';

function Note(props) {
  function handleClick() {
    // props.onDelete adalah function deleteNote, dan props.id adalah id dari itemnya 
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><Icon icon="ic:baseline-delete" color="#f5ba13" width="30" height="30" /></button>
    </div>
  );
}

export default Note;
