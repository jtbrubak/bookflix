export const fetchBooks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/books'
  });
};
