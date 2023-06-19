import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {

  // valuenya kt buat array kosong
  const [notes,setNotes] = useState([]);

  // addNote akan ditambahkan sebagai value dari props createArea
  function addNote(newNote){
    // setNotes akan menerima prevNotes yg mewakili value dari notes
    setNotes(prevNotes => {
      // mengembalikan array baru dengan dan diset Menjadi newNote 
      return [...prevNotes, newNote];
    })
  }

  function deleteNote (id){
    setNotes(prevNotes =>{
      // kt hapus dgn filter, dia butuh noteItem = value, index = index dari array 
return  prevNotes.filter((noteItem, index)=>{
         return index !== id; 
      })
    })
  }
  return(
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* noteItem= valuenya  index utk mendapatkan id dari itemnya */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
