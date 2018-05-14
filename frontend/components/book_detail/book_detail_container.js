import { connect } from 'react-redux';
import { fetchBookDetail } from '../../actions/book_actions';
import { fetchRating } from '../../actions/rating_actions';
import BookDetail from './book_detail';

const mapStateToProps = ({ bookDetail, session }, ownProps) => ({
  id: parseInt(ownProps.params.id),
  bookDetail,
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchBookDetail: (id) => dispatch(fetchBookDetail(id)),
  fetchRating: (params) => dispatch(fetchRating(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail);
