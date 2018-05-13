export const fetchBookDetail = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/books/${id}`
  });
};
