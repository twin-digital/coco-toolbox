import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const NoteForm = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    const newNote = { id: uuidv4(), title, body };
    localStorage.setItem('notes', JSON.stringify([...notes, newNote]));
    setTitle('');
    setBody('');
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input id="title" type="text" value={title} onChange={event => setTitle(event.target.value)} />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea id="body" value={body} onChange={event => setBody(event.target.value)} />
      </div>
      <button type="submit">Create Note</button>
    </form>
  );
};

export default NoteForm;