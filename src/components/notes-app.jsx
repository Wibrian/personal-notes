import React from 'react';
import NotesHeader from './notes-header';
import NotesMain from './notes-main';
import { getInitialData } from '../utils/index';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    console.log('created');

    this.state = {
      notes: getInitialData()
    };
  }

  render() {
    return (
      <React.Fragment>
        <NotesHeader />
        <NotesMain />
      </React.Fragment>
    );
  }
}

export default NotesApp;
