import React from 'react';
import NotesHeader from './notes-header';
import NotesMain from './notes-main';
import NotesForm from './notes-form';
import NotesArchive from './notes-main-archive';
import { getInitialData } from '../utils/index';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      filteredNotes: getInitialData()
    };

    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onDeleteNoteEventHandler = this.onDeleteNoteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onSearchEventhandler = this.onSearchEventhandler.bind(this);
  }

  onAddNoteEventHandler({ title, body }) {
    const randomID = +new Date();

    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: randomID,
            title,
            body,
            archived: false,
            createdAt: new Date()
          }
        ],
        filteredNotes: [
          ...prevState.filteredNotes,
          {
            id: randomID,
            title,
            body,
            archived: false,
            createdAt: new Date()
          }
        ]
      };
    });
  }

  onDeleteNoteEventHandler(id) {
    const deleteNote = this.state.notes.filter((note) => note.id !== id);
    this.setState({
      filteredNotes: deleteNote
    });
  }

  onArchiveEventHandler(id) {
    this.setState((prevState) => {
      const notes = prevState.notes.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived;
        }
        return note;
      });

      return {
        filteredNotes: notes
      };
    });
  }

  onSearchEventhandler(event) {
    const searchString = event.target.value.toLowerCase();
    console.log(searchString);
    this.setState((prevState) => {
      return {
        filteredNotes: prevState.notes.filter((note) => note.title.toLowerCase().includes(searchString))
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <NotesHeader />
        <main>
          <NotesForm addNote={this.onAddNoteEventHandler} />
          <NotesMain
            notes={this.state.filteredNotes}
            onDelete={this.onDeleteNoteEventHandler}
            onArchive={this.onArchiveEventHandler}
            onSearch={this.onSearchEventhandler}
          />
          <NotesArchive notes={this.state.filteredNotes} onDelete={this.onDeleteNoteEventHandler} onArchive={this.onArchiveEventHandler} />
        </main>
      </React.Fragment>
    );
  }
}

export default NotesApp;
