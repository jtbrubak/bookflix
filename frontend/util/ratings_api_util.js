export const createRating = (rating) => {
  return $.ajax({
    method: 'POST',
    url: '/api/book_ratings',
    data: rating
  });
};

export const updateRating = (rating) => {
  return $.ajax({
    method: 'PUT',
    url: `/api/book_ratings/${rating.id}`,
    data: rating
  });
}

export const deleteRating = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/book_ratings/${id}`
  });
};
