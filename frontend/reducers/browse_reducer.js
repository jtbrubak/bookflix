import { RECEIVE_BOOKS } from '../actions/browse_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  books: []
});

const BrowseReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKS:
      const books = action.books;
      return merge({}, defaultState, {
        books
      });
    default:
      return state;
  }
};

export default BrowseReducer;
