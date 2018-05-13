import React from 'react';
import { Link } from 'react-router';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { booksInView: [], startPoint: 0 };
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    return { booksInView: nextProps.books.slice(0, 5) };
  }

  scrollLeft() {
    var newStartPoint = this.state.startPoint - 5;
    if (newStartPoint < 0) {
      newStartPoint = this.props.books.length - 5;
    }
    var newBooks = this.props.books.slice(newStartPoint, newStartPoint + 5);
    this.setState({ booksInView: newBooks, startPoint: newStartPoint });
  }

  scrollRight() {
    var newStartPoint = this.state.startPoint + 5;
    if (newStartPoint >= this.props.books.length) {
      newStartPoint = 0;
    }
    var newBooks = this.props.books.slice(newStartPoint, newStartPoint + 5);
    this.setState({ booksInView: newBooks, startPoint: newStartPoint });
  }

  render() {
    return (
      <div className="carousel">
        <span>{this.props.title}</span>
        <div className="carousel-main">
          <i className="fa fa-chevron-circle-left" onClick={this.scrollLeft}></i>
          <ul>
            {
              this.state.booksInView.map((book, i) => (
                <li className="carousel-element" key={i}>
                  <Link to={`/books/${book.id}`}>
                    <img src={book.picture_url} />
                  </Link>
                  <Link to={`/books/${book.id}`}>
                    <span>{book.title}</span>
                  </Link>
                </li>
              ))
            }
          </ul>
          <i className="fa fa-chevron-circle-right" onClick={this.scrollRight}></i>
        </div>
      </div>
    );
  }
}

export default Carousel;
