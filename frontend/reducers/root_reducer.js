import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BrowseReducer from './browse_reducer';
import BookReducer from './book_reducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  browse: BrowseReducer,
  bookDetail: BookReducer
});

export default RootReducer;
