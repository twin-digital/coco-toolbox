import React from 'react';
import { useParams } from 'react-router-dom';

interface Note {
  id: string;
  title: string;
  body: string;
}

const Note = () => {
  const { id } = useParams<{ id: string }>();
  const note: Note = JSON.parse(localStorage.getItem('notes') || '[]').find(note => note.id === id);

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.body}</p>
    </div>
  );
};

export default Note;