import React from 'react';

const NoteItem = ({ id, title, body, archived, createdAt, onDelete, onArchive }) => {

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(createdAt));

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{formattedDate}</p> {/* Tampilkan tanggal */}
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__actions">
        <button className="note-item__delete-button" onClick={() => onDelete(id)}>
          Delete
        </button>
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>
          {archived ? 'Move' : 'Archive'}
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
