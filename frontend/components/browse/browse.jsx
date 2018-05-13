import React from 'react';
import Carousel from '../carousel/carousel';

class Browse extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <section id="browse">
        <Carousel title={"Featured Books"} books={this.props.browse.books}/>
      </section>
    );
  }

}

export default Browse;
