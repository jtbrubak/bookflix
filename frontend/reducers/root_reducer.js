import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BrowseReducer from './browse_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  browse: BrowseReducer
});

export default RootReducer;
