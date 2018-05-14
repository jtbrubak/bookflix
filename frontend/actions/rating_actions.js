import * as APIUtil from '../util/ratings_api_util';

export const RECEIVE_RATING = 'RECEIVE_RATING';

export const createRating = rating => dispatch => (
  APIUtil.createRating(rating).then(rating => dispatch(receiveRating(rating)))
);

export const updateRating = rating => dispatch => (
  APIUtil.updateRating(rating).then(rating => dispatch(receiveRating(rating)))
);

export const deleteRating = id => dispatch => (
  APIUtil.deleteRating(id).then(() => dispatch(receiveRating({rating: null})))
);

export const fetchRating = params => dispatch => (
  APIUtil.fetchRating(params).then(rating => dispatch(receiveRating(rating)),
    (err) => dispatch(receiveRating({rating: null})))
);

export const receiveRating = rating => ({
  type: RECEIVE_RATING,
  rating
});
