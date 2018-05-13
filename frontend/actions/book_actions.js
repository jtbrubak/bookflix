import * as APIUtil from '../util/books_api_util';

export const RECEIVE_BOOK_DETAIL = "RECEIVE_BOOK_DETAIL";

export const fetchBookDetail = (id) => dispatch => (
  APIUtil.fetchBookDetail(id).then(book => dispatch(receiveBookDetail(book)))
);

export const receiveBookDetail = book => ({
  type: RECEIVE_BOOK_DETAIL,
  book
});
