import React from 'react';

const NoteItem = ({ id, title, body, archived, onDelete, onArchive }) => {
  return (
    <div className="note-item">
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="note-item__actions">
        <button onClick={() => onDelete(id)}>Delete</button>
        <button onClick={() => onArchive(id)}>{archived ? 'Pindahkan' : 'Arsipkan'}</button>
      </div>
    </div>
  );
};

export default NoteItem;
