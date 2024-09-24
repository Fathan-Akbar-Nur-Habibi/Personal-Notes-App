import React, { useState } from 'react';
import { getInitialData } from '../utils';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import SearchBar from './SearchBar';

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState('');

  const addNoteHandler = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNoteHandler = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const archiveNoteHandler = (id) => {
    setNotes(
      notes.map(note => note.id === id ? { ...note, archived: !note.archived } : note)
    );
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const activeNotes = filteredNotes.filter(note => !note.archived);
  const archivedNotes = filteredNotes.filter(note => note.archived);

  return (
    <div className="app">
      <h1>Private Notes App</h1>
      <SearchBar keyword={searchKeyword} onSearch={setSearchKeyword} />
      <h2>Add Note</h2>
      <NoteForm onAddNote={addNoteHandler} />
      <h2>Active Notes</h2>
      <NoteList notes={activeNotes} onDelete={deleteNoteHandler} onArchive={archiveNoteHandler} />
      <h2>Archive Notes</h2>
      <NoteList notes={archivedNotes} onDelete={deleteNoteHandler} onArchive={archiveNoteHandler} />
    </div>
  );
};

export default App;
