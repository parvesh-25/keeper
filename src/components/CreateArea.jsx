import React, { useState } from "react";
import { Icon } from '@iconify/react';

function CreateArea(props) {

    // expand di set ke false, akan true ketika diklik
const [isExpanded,setExpanded] = useState(false);

const [note,setNote] = useState({
title:"",
content:""
})

function handleChange(event){
const {name,value}= event.target;

// utk mendapatkan note yang baru
// prevNote adalah note sebelumnya
setNote(prevNote =>{
// membuat objek baru
return{
...prevNote,
// Properti yang sesuai dengan name diperbarui dengan value baru
[name]:value
}
})
}

function submitNote(event){
// props.onAdd adalah function addNote
props.onAdd(note);
// ketika di submit maka input area akan kosong lagi
setNote({
title:"",
content:""
})
// default dari form adalah refresh page
// dgn preventDefault() mencegah refresh page
event.preventDefault();
}

function expand(){
setExpanded(true);
}
return(
<div>
    <form className="create-note">

        {/* jika diklik, text area akan muncul */}
        {isExpanded ? <input type="text" onChange={handleChange} value={note.title} name="title"
            placeholder="title" />:null}

        <textarea 
        name="content" 
        onClick={expand} 
        onChange={handleChange} 
        value={note.content}
        placeholder="take a note.."
        // klo false rownya 1 klo true 1 
        rows={isExpanded? 3 : 1}>

        </textarea>
        <button onClick={submitNote}><Icon icon="ic:baseline-add" color="white" width="30" height="30" /></button>
    </form>
</div>
)
}

export default CreateArea;