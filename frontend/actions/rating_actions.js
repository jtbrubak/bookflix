import * as APIUtil from '../util/ratings_api_util';

export const createRating = rating => dispatch => (
  APIUtil.createRating(rating).then(book => dispatch(receiveBookDetail(book)))
);

export const updateRating = rating => dispatch => (
  APIUtil.updateRating(rating).then(book => dispatch(receiveBookDetail(book)))
);

export const deleteRating = id => dispatch => (
  APIUtil.deleteRating(id).then(book => dispatch(receiveBookDetail(book)))
);
