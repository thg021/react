import React, { Component, Fragment } from "react";
import Icon from "@material/react-material-icon";
import classNames from "classnames";
class Note extends Component {
  state = {
    isEditing: false
  };

  handleEdit = () => {
    this.setState({
      isEditing: true
    });
  };

  handleCancel = () => {
    this.setState({
      isEditing: false
    });
  };

  handleSave = () => {
    this.props.onEdit(this.props.id, this.input.value);
    this.setState({
      isEditing: false
    });
  };

  render() {
    const { id, note, index, onMove, onDelete, total } = this.props;
    const { isEditing } = this.state;
    return (
      <div className="note">
        {isEditing ? (
          <input
            type="text"
            className="note__input"
            defaultValue={note}
            ref={c => {
              this.input = c;
            }}
          />
        ) : (
          <span className="note__text">{note}</span>
        )}
        {isEditing && (
          <Fragment>
            <button
              className="note__button note__button--red"
              onClick={() => {
                this.handleCancel();
              }}
            >
              <Icon icon="clear" />
            </button>
            <button
              className="note__button note__button--green"
              onClick={this.handleSave}
            >
              <Icon icon="done" />
            </button>
          </Fragment>
        )}

        <button
          disabled={isEditing}
          className="note__button"
          onClick={() => {
            //onEdit(id);
            this.handleEdit();
          }}
        >
          <Icon icon="edit" />
        </button>
        <button
          disabled={isEditing}
          className="note__button note__button--red"
          onClick={() => onDelete(id)}
        >
          <Icon icon="delete" />
        </button>
        <button
          className={classNames("note__button", {
            "note__button--hidden": index === 0
          })}
          onClick={() => {
            onMove("up", index);
          }}
        >
          <Icon icon="keyboard_arrow_up" />
        </button>

        <button
          className={classNames("note__button", {
            "note__button--hidden": index === total
          })}
          onClick={() => {
            onMove("down", index);
          }}
        >
          <Icon icon=" keyboard_arrow_down" />
        </button>
      </div>
    );
  }
}

export default Note;
