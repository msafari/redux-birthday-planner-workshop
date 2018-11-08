import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import routerReducer from './router';

export default combineReducers({
  route: routerReducer,
  global: globalReducer
});
