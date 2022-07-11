import React from 'react';
import Button from './utils/button';
import { showFormattedDate } from '../utils';

function NotesList({ note, onDelete, onArchive }) {
  return (
    <>
      <div className='notes-list'>
        <div className='notes-data'>
          <h3>{note.title}</h3>
          <p className='notes-date'>{showFormattedDate(note.createdAt)}</p>
          <p>{note.body}</p>
        </div>
        <div className='button-trigger'>
          <button className='button-delete' onClick={() => onDelete(note.id)}>
            <Button name='Delete' />
          </button>
          <button className='button-archive' onClick={() => onArchive(note.id)}>
            {note.archived === false ? <Button name='Archive' /> : <Button name='Move to Note' />}
          </button>
        </div>
      </div>
    </>
  );
}

export default NotesList;
