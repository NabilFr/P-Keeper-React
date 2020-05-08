import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import notes from '../notes';

function App() {
  const [allNote, setAllNote] = useState(notes);
  function addNote(title, text) {
    setAllNote((pre) => {
      return [...pre, { key: pre.length + 1, title: title, content: text }];
    });
  }
  function deleteNote(id) {
    console.log('trigger');
    setAllNote((pre) => pre.filter((item) => item.key !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {allNote.map((note) => (
        <Note
          id={note.key}
          onDelete={deleteNote}
          key={note.key}
          title={note.title}
          content={note.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
