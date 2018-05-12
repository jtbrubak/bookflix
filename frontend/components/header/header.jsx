import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {

  const handleClick = () => {
    props.logout().then(() => location.reload(true));
  }

  return (
    <header>
      <Link to={'/browse'}>BOOKFLIX</Link>
      <p>{props.username}</p>
      <button onClick={handleClick}>Log Out</button>
    </header>
  );
}

export default Header;
