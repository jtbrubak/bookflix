import React from 'react';
import Header from '../header/header';

const Main = (props) => {
  return (
    <section id="main">
      <Header />
      {props.children}
    </section>
  )
};

export default Main;
