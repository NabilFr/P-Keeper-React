import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Zoom } from '@material-ui/core';

function CreateArea(props) {
  const [title, setTitle] = useState();
  const [text, setText] = useState();

  function changeTitle(event) {
    const { value } = event.target;
    setTitle(value);
  }

  function changeText(event) {
    const { value } = event.target;
    setText(value);
  }

  return (
    <div>
      <form className="create-note">
        <input onChange={changeTitle} name="title" placeholder="Title" value={title} />

        <textarea
          onChange={changeText}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={text}
        />
        <Zoom in={true}>
          <Fab
            onClick={(event) => {
              props.add(title, text);
              event.preventDefault();
              setText('');
              setTitle('');
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
