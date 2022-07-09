import React from 'react';
import NotesArchive from './notes-main-archive';

function NotesData() {
  return (
    <section>
      <h2>My Notes</h2>
      <article>
        <div className='notes-list'>
          <div className='notes-data'>
            <h3>Babel</h3>
            <p className='notes-date'>Kamis, 14 April 2022</p>
            <p>
              Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript
              engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.
            </p>
          </div>
          <div className='button-trigger'>
            <button className='button-delete'>
              <b>Delete</b>
            </button>
            <button className='button-archive'>
              <b>Archive</b>
            </button>
          </div>
        </div>
        <div className='notes-list'>
          <div className='notes-data'>
            <h3>Babel</h3>
            <p className='notes-date'>Kamis, 14 April 2022</p>
            <p>
              Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript
              engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.
            </p>
          </div>
          <div className='button-trigger'>
            <button className='button-delete'>
              <b>Delete</b>
            </button>
            <button className='button-archive'>
              <b>Archive</b>
            </button>
          </div>
        </div>
        <div className='notes-list'>
          <div className='notes-data'>
            <h3>Babel</h3>
            <p className='notes-date'>Kamis, 14 April 2022</p>
            <p>
              Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript
              engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.
            </p>
          </div>
          <div className='button-trigger'>
            <button className='button-delete'>
              <b>Delete</b>
            </button>
            <button className='button-archive'>
              <b>Archive</b>
            </button>
          </div>
        </div>
        <div className='notes-list'>
          <div className='notes-data'>
            <h3>Babel</h3>
            <p className='notes-date'>Kamis, 14 April 2022</p>
            <p>
              Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript
              engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.
            </p>
          </div>
          <div className='button-trigger'>
            <button className='button-delete'>
              <b>Delete</b>
            </button>
            <button className='button-archive'>
              <b>Archive</b>
            </button>
          </div>
        </div>
        <div className='notes-list'>
          <div className='notes-data'>
            <h3>Babel</h3>
            <p className='notes-date'>Kamis, 14 April 2022</p>
            <p>
              Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript
              engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.
            </p>
          </div>
          <div className='button-trigger'>
            <button className='button-delete'>
              <b>Delete</b>
            </button>
            <button className='button-archive'>
              <b>Archive</b>
            </button>
          </div>
        </div>
      </article>
      <NotesArchive />
    </section>
  );
}

export default NotesData;
