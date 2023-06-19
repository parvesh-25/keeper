import React, { useState } from "react";

function CreateArea(props) {
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
    
    return(
        <div>
            <form className="create-note">
                <input type="text" onChange={handleChange} value={note.title} name="title" placeholder="title" />
                <textarea name="content" onChange={handleChange} value={note.content} placeholder="take a note..">

                </textarea>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;