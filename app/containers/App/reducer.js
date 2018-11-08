import {
  INCREMENT,
  ADD_GUEST
} from './constants';

// The initial state of the App
const initialState = {
  guestCount: 2,
  guestList: [
    'Maedeh Safari',
    'Surabhi Nigam'
  ]
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        guestCount: state.guestCount + 1
      });
    case ADD_GUEST:
      return Object.assign({}, state, {
        guestList: state.guestList.concat(action.guest)
      });
    default:
      return state;
  }
}

export default appReducer;
