import React from "react";
import Note from "./Note";

const NoteList = ({ notes, onMove, onDelete, onEdit }) => (
  <div className="note-list">
    {notes.map((note, index) => (
      <Note
        key={note.id}
        id={note.id}
        note={note.text}
        index={index}
        onMove={onMove}
        onDelete={onDelete}
        onEdit={onEdit}
        total={notes.length - 1}
      />
    ))}
  </div>
);

export default NoteList;
