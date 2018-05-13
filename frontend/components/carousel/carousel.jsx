import React from 'react';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { booksInView: [] };
  }

  static getDerivedStateFromProps(nextProps) {
    return { booksInView: nextProps.books.slice(0, 5) };
  }

  render() {
    return (
      <div className="carousel">
        <p>{this.props.title}</p>
        <ul>
          {
            this.state.booksInView.map((book, i) => (
              <li className="carousel-element" key={i}>
                <img src={book.picture_url} />
                <p>{book.title}</p>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Carousel;
