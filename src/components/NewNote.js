import React, { Component } from "react";

class NewNote extends Component {
  state = {
    text: ""
  };
  render() {
    const { onAddNote } = this.props;
    const { text } = this.state;
    return (
      <div className="new-note">
        <input
          placeholder="Digite sua nota e aperte Enter para salvar"
          type="text"
          name="newNote"
          id="newNote"
          className="new-note__input"
          value={text}
          onChange={e => {
            this.setState({
              text: e.target.value
            });
          }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              onAddNote(e.target.value);
              this.setState({
                text: ""
              });
            }
          }}
        />
      </div>
    );
  }
}

export default NewNote;
