import { handleActions } from 'redux-actions';

const routeInitialState = {
  location: null,
};

const routeReducer = handleActions({
  LOCATION_CHANGE: (state, action) => (
    Object.assign({}, state, {
      location: action.payload,
    })
  )
}, routeInitialState);

export default routeReducer;
