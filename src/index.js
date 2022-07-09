import React from 'react';
import { createRoot } from 'react-dom/client';
import NotesApp from './components/notes-app';
import './styles/style.css';

// const test = <h1>Hello, React</h1>;

const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);
