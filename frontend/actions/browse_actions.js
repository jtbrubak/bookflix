import * as APIUtil from '../util/browse_api_util';

export const RECEIVE_BOOKS = "RECEIVE_BOOKS";

export const fetchBooks = () => dispatch => (
  APIUtil.fetchBooks().then(books => dispatch(receiveBooks(books)))
);

export const receiveBooks = books => ({
  type: RECEIVE_BOOKS,
  books
});
