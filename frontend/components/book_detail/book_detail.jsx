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
      <section id="book-detail">
        <img src={this.props.bookDetail.picture_url} />
        <span>{this.props.bookDetail.title}</span>
        <span>{this.props.bookDetail.author}</span>
        <span>{this.props.bookDetail.year}</span>
        <button>READ</button>
      </section>
    );
  }

}

export default BookDetail;
