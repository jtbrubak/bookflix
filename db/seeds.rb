link = "http://www.jbrubaker.me/assets/Resume.pdf"
desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Author.destroy_all
Author.create(name: 'Aldous Huxley')
huxley = Author.find_by(name: 'Aldous Huxley').id

Book.destroy_all
Book.create(pdf_link: link, description: desc, title: 'Brave New World', author_id: huxley, year: 1932, picture_url: 'https://images.gr-assets.com/books/1523061131l/5129.jpg')
Book.create(pdf_link: link, description: desc, picture_url: 'https://images.gr-assets.com/books/1375947566l/5128.jpg', author_id: huxley, year: 1956, title: 'The Doors of Perception')
Book.create(pdf_link: link, description: desc, picture_url: 'https://images.gr-assets.com/books/1375947541l/5130.jpg', author_id: huxley, year: 1963, title: 'Island')
Book.create(pdf_link: link, description: desc, picture_url: 'https://images.gr-assets.com/books/1386925117l/5135.jpg', author_id: huxley, year: 1928, title: 'Point Counter Point')
Book.create(pdf_link: link, description: desc, picture_url: 'https://images.gr-assets.com/books/1415575803l/53672.jpg', author_id: huxley, year: 1921, title: 'Crome Yellow')
Book.create(pdf_link: link, description: desc, picture_url: 'https://images.gr-assets.com/books/1391560904l/30561.jpg', author_id: huxley, year: 1948, title: 'Ape and Essence')
Book.create(pdf_link: link, description: desc, picture_url: 'https://images.gr-assets.com/books/1433092475l/261004.jpg', author_id: huxley, year: 1936, title: 'Eyeless in Gaza')
Book.create(pdf_link: link, description: desc, title: 'The Genius and the Goddess', picture_url: 'https://images.gr-assets.com/books/1433092598l/30572.jpg', year: 1955, author_id: huxley)
Book.create(pdf_link: link, description: desc, title: 'The Devils of Loudon', picture_url: 'https://images.gr-assets.com/books/1320523772l/53673.jpg', year: 1952, author_id: huxley)
Book.create(pdf_link: link, description: desc, title: 'Antic Hay', picture_url: 'https://images.gr-assets.com/books/1433092136l/294609.jpg', year: 1923, author_id: huxley)

User.destroy_all
User.create(username: 'guest', password: 'password')
