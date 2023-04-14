import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoteList from './components/NoteList';
import Note from './components/Note';
import NoteForm from './components/NoteForm';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/new" component={NoteForm} />
      <Route exact path="/" component={NoteList} />
      <Route exact path="/note/:id" component={Note} />
    </Switch>
  </Router>,
  document.getElementById('root')
);