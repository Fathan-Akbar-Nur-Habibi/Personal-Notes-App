import React, { useState } from 'react';

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [titleLimit, setTitleLimit] = useState(50);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() && body.trim()) {
      onAddNote({
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      });
      setTitle('');
      setBody('');
      setTitleLimit(100000);
    }
  };

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    if (newTitle.length <= 50) {
      setTitle(newTitle);
      setTitleLimit(100000 - newTitle.length);
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <p>Remaining Characters: {titleLimit}</p>
      <input 
        type="text"
        placeholder="Title Note"
        value={title}
        onChange={handleTitleChange}
        required 
      />
      <textarea 
        placeholder="Content"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required 
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
