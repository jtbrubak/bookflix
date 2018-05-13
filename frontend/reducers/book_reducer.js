import { RECEIVE_BOOK_DETAIL } from '../actions/book_actions';

const bookDefault = {
  id: undefined,
  title: undefined,
  author: undefined,
  picture_url: undefined,
  year: undefined
}

const BookReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOK_DETAIL:
      return action.book;
    default:
      return state;
  }
};

export default BookReducer;
