import React from 'react';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

function Header() {
  return (
    <header>
      <h1>
        <EmojiObjectsIcon fontSize="large" style={{ marginRight: 10, paddingTop: 2 }} />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
