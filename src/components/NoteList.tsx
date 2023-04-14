import React from 'react';
import { Link } from 'react-router-dom';

const NoteList = () => {
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');

  return (
    <div>
      <h1>Note Taking App</h1>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <Link to={`/note/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <Link to={`/new`}>Create a new note</Link>
      </div>
    </div>
  );
};

export default NoteList;