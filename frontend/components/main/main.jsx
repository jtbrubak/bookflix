import React from 'react';
import HeaderContainer from '../header/header_container';

const Main = (props) => {
  return (
    <section id="main">
      <HeaderContainer />
      {props.children}
    </section>
  )
};

export default Main;
