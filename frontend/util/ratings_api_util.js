export const createRating = (rating) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: '/api/book_ratings',
    data: rating
  });
};

export const updateRating = (params) => {
  return $.ajax({
    method: 'PUT',
    url: `/api/book_ratings/${params.id}`,
    data: params
  });
}

export const deleteRating = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/book_ratings/${id}`
  });
};

export const fetchRating = (params) => {
  return $.ajax({
    method: 'GET',
    url: '/api/book_ratings',
    data: params
  })
}
