import React from 'react';
import NotesForm from './notes-form';
import NotesData from './notes-main-data';

class NotesMain extends React.Component {
  render() {
    return (
      <main>
        <div className='main-fill'>
          <h2>Make your Notes!</h2>
          <NotesForm />
        </div>
        <NotesData />
      </main>
    );
  }
}

export default NotesMain;
