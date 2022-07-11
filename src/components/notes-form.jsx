import React from 'react';
import TitleH2 from './utils/title';

class NotesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: {
        title: '',
        body: ''
      },
      charaLimit: {
        inputNote: '',
        limitRemain: 50,
        remain: 50
      }
    };

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onTitleEventHandler = this.onTitleEventHandler.bind(this);
    this.onBodyEventHandler = this.onBodyEventHandler.bind(this);
  }

  onTitleEventHandler(event) {
    if (event.target.value.length <= 50) {
      this.setState((prevState) => {
        return {
          note: {
            ...prevState.note,
            title: event.target.value
          },
          charaLimit: {
            ...prevState.charaLimit,
            inputNote: event.target.value,
            remain: prevState.charaLimit.limitRemain - event.target.value.length
          }
        };
      });
    }
  }

  onBodyEventHandler(event) {
    this.setState((prevState) => {
      return {
        note: {
          ...prevState.note,
          body: event.target.value
        }
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state.note);
    this.setState(() => {
      return {
        note: {
          title: '',
          body: ''
        },
        charaLimit: {
          remain: 50
        }
      };
    });
  }

  render() {
    return (
      <div className='main-fill'>
        <TitleH2 name='Make Your Notes!' />
        <form onSubmit={this.onSubmitEventHandler}>
          <p className='input-limit'>
            Character Limit: <b>{this.state.charaLimit.remain}</b>
          </p>
          <input
            className='input-title'
            type='text'
            placeholder='Input title..'
            value={this.state.note.title}
            onChange={this.onTitleEventHandler}
            required
          />
          <textarea
            className='input-title'
            cols='30'
            rows='10'
            placeholder='Write your note here...'
            value={this.state.note.body}
            onChange={this.onBodyEventHandler}
            required
          ></textarea>
          <button className='submit-note' type='submit'>
            <b>Create Note</b>
          </button>
        </form>
      </div>
    );
  }
}

export default NotesForm;
