import React from 'react';

function NotesForm({ count }) {
  return (
    <form>
      <p className='input-limit'>
        Character Limit: <b>50</b>
      </p>
      <input className='input-title' type='text' placeholder='Input title..' />
      <textarea className='input-title' cols='30' rows='10' placeholder='Write your note here...'></textarea>
      <button className='submit-note' type='submit'>
        <b>Create Note</b>
      </button>
    </form>
  );
}

export default NotesForm;
