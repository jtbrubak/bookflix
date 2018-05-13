import React from 'react';
import { Link } from 'react-router';

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
                <Link to={`/books/${book.id}`}>
                  <img src={book.picture_url} />
                </Link>
                <Link to={`/books/${book.id}`}>
                  <p>{book.title}</p>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Carousel;
