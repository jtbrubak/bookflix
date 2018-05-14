import React from 'react';
import ThumbsContainer from '../thumbs/thumbs_container';

class BookDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchBookDetail(this.props.id);
    this.props.fetchRating({ book_id: this.props.id,
      user_id: this.props.currentUser.id });
  }

  render() {
    return (
      <div id="book-detail">
        <div id="book-detail-left">
          <img src={this.props.bookDetail.book.picture_url} />
        </div>
        <div id="book-detail-right">
          <span>{this.props.bookDetail.book.title}</span>
          <span>{this.props.bookDetail.book.author}</span>
          <span>{this.props.bookDetail.book.year}</span>
          <p>{this.props.bookDetail.book.description}</p>
          <a href={this.props.bookDetail.book.pdf_link}>READ</a>
          <ThumbsContainer />
        </div>
      </div>
    );
  }

}

export default BookDetail;
