import React, { Component } from "react";
import uuid from "uuid/v1";

import AppBar from "./src/components/AppBar";
import NewNote from "./src/components/NewNote";
import NoteList from "./src/components/NoteList";

class App extends Component {
  state = {
    notes: [],
    isLoading: false
  };

  componentDidMount() {
    this.handleReload();
  }
  handleAddNote = text => {
    this.setState(prevState => {
      const notes = prevState.notes.concat({ id: uuid(), text });

      this.handleSave(notes);
      return { notes };
    });
  };

  handleMove = (direction, index) => {
    this.setState(prevState => {
      const newNotes = prevState.notes.slice();
      const removedNote = newNotes.splice(index, 1)[0];
      if (direction === "up") {
        newNotes.splice(index - 1, 0, removedNote);
      } else {
        newNotes.splice(index + 1, 0, removedNote);
      }

      this.handleSave(newNotes);

      return {
        notes: newNotes
      };
    });
  };

  handleDelete = id => {
    const Notes = this.state.notes.filter(note => {
      return note.id !== id;
    });
    this.handleSave(Notes);

    this.setState({ notes: Notes });
  };

  handleEdit = (id, value) => {
    this.setState(prevState => {
      const newNotes = prevState.notes.slice();
      const index = newNotes.findIndex(note => note.id === id);

      newNotes[index].text = value;
      this.handleSave(newNotes);
      return {
        notes: newNotes
      };
    });
  };

  handleSave = notes => {
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      window.localStorage.setItem("notes", JSON.stringify(notes));
      this.setState({ isLoading: false });
    }, 3000);
  };

  handleReload = () => {
    const notes = window.localStorage.getItem("notes");
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      this.setState({
        notes: JSON.parse(notes),
        isLoading: false
      });
    }, 5000);
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div className="container">
        <AppBar isLoading={isLoading} />
        <NewNote onAddNote={this.handleAddNote} />
        <NoteList
          notes={this.state.notes}
          onMove={this.handleMove}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
