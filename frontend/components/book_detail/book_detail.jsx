import React from 'react';

class BookDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchBookDetail(this.props.id);
  }

  render() {
    return (
      <div id="book-detail">
        <div id="book-detail-left">
          <img src={this.props.bookDetail.picture_url} />
        </div>
        <div id="book-detail-right">
          <span>{this.props.bookDetail.title}</span>
          <span>{this.props.bookDetail.author}</span>
          <span>{this.props.bookDetail.year}</span>
          <p>{this.props.bookDetail.description}</p>
          <a href={this.props.bookDetail.pdf_link}>READ</a>
        </div>
      </div>
    );
  }

}

export default BookDetail;
