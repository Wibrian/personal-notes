import React from 'react';
import NotesList from './notes-main-list';
import TitleH2 from './utils/title';
import Empty from './utils/empty';

function NotesArchive({ notes, onDelete, onArchive }) {
  const archivedNotes = notes.filter((note) => note.archived === true);

  if (archivedNotes.length === 0) {
    return (
      <>
        <section>
          <TitleH2 name='My Archive' />
          <Empty name='No archived notes...' />
        </section>
      </>
    );
  } else {
    return (
      <>
        <section>
          <TitleH2 name='My Archive' />
          <article>
            {archivedNotes.map((note, id) => {
              return <NotesList key={id} note={note} onDelete={onDelete} onArchive={onArchive} />;
            })}
          </article>
        </section>
      </>
    );
  }
}

export default NotesArchive;
