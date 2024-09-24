/*import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete, onArchive }) => {
  if (notes.length === 0) {
    return <p>No notes</p>;
  }

  return (
    <div className="note-list">
      {notes.map(note => (
        <NoteItem key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} />
      ))}
    </div>
  );
};

export default NoteList;
*/

// src/components/NoteList.jsx

import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete, onArchive }) => {
  if (notes.length === 0) {
    return <p>No notes</p>;
  }

  return (
    <div className="note-list">
      {notes.map(note => (
        <NoteItem
          key={note.id}
          {...note} 
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </div>
  );
};

export default NoteList;
