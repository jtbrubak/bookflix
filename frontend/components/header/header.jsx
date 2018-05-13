import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {

  const handleClick = () => {
    props.logout().then(() => location.reload(true));
  }

  return (
    <header>
      <div id="header-left">
        <Link to={'/browse'}>BOOKFLIX</Link>
      </div>
      <div id="header-right">
        <p>{props.username}</p>
        <button onClick={handleClick}>Log Out</button>
      </div>
    </header>
  );
}

export default Header;
