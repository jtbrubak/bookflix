import React from 'react';

const Thumbs = (props) => {
  var rating_ids = { 'up': 1, 'down': 2 };

  var checkRating = (direction) => {
    var classString = `fa fa-thumbs-${direction}`;
    classString += props.bookRating.rating === rating_ids[direction] ? ' enabled' : '';
    return classString;
  }

  var buildParams = (direction) => {
    return {
      book_rating: {
        book_id: props.bookId,
        user_id: props.userId,
        rating: rating_ids[direction]
      }
    };
  }

  var toggleRating = (direction) => {
    if (props.bookRating.rating === null) {
      var params = buildParams(direction);
      props.createRating(params);
    } else if (props.bookRating.rating === rating_ids[direction]) {
      props.deleteRating(props.bookRating.id);
    } else {
      var params = buildParams(direction);
      params.id = props.bookRating.id;
      props.updateRating(params);
    }
  }

  return (
    <div className="thumbs">
      <i className={checkRating('up')} onClick={() => toggleRating('up')}></i>
      <i className={checkRating('down')} onClick={() => toggleRating('down')}></i>
    </div>
  );

};

export default Thumbs;
