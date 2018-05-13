import { connect } from 'react-redux';
import { fetchBooks } from '../../actions/browse_actions';
import Browse from './browse';

const mapStateToProps = ({ browse }) => ({
  browse
});

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
