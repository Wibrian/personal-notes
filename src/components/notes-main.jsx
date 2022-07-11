import React from 'react';
import NotesList from './notes-main-list';
import TitleH2 from './utils/title';
import Empty from './utils/empty';

function NotesMain({ notes, onDelete, onArchive, onSearch }) {
  const Notes = notes.filter((note) => note.archived === false);

  if (Notes.length === 0) {
    return (
      <>
        <section>
          <div className='notes-search'>
            <TitleH2 name='My Notes' />
            <input type='search' placeholder='Search Notes...' onChange={(event) => onSearch(event)} />
          </div>
          <article>
            <Empty name='Notes not found or created...' />
          </article>
        </section>
      </>
    );
  }

  return (
    <>
      <section>
        <div className='notes-search'>
          <TitleH2 name='My Notes' />
          <input type='search' placeholder='Search Notes...' onChange={(event) => onSearch(event)} />
        </div>
        <article>
          {Notes.map((note, id) => {
            return <NotesList key={id} note={note} onDelete={onDelete} onArchive={onArchive} />;
          })}
        </article>
      </section>
    </>
  );
}

export default NotesMain;
