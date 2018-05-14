import { connect } from 'react-redux';
import { createRating, updateRating, deleteRating } from '../../actions/rating_actions';
import Thumbs from './thumbs';

const mapStateToProps = ({ bookDetail, session }) => ({
  bookId: bookDetail.book.id,
  userId: session.currentUser.id,
  bookRating: bookDetail.bookRating
});

const mapDispatchToProps = (dispatch) => ({
  createRating: (params) => dispatch(createRating(params)),
  updateRating: (params) => dispatch(updateRating(params)),
  deleteRating: (id) => dispatch(deleteRating(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Thumbs);
