import { RECEIVE_BOOK_DETAIL } from '../actions/book_actions';
import { RECEIVE_RATING } from '../actions/rating_actions';
import merge from 'lodash/merge';

const bookDefault = {
  book: {},
  bookRating: {
    rating: null,
    id: null
  }
}

const BookReducer = (state = bookDefault, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOK_DETAIL:
      var newState = merge({}, state);
      newState.book = action.book;
      return newState;
    case RECEIVE_RATING:
      var newState = merge({}, state);
      newState.bookRating = action.rating;
      return newState;
    default:
      return state;
  }
};

export default BookReducer;
