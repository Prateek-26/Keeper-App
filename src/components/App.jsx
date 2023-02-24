import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setList] = useState([]);

  function addNote(note) {
    setList((prevValue) => {
      console.log(noteList);
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
    setList((prevValue) => {
      return noteList.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {noteList.map((element, index) => {
        return (
          <Note
            key={index}
            index={index}
            title={element.title}
            content={element.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
