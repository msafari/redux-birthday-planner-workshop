import { handleActions } from 'redux-actions';

const initialState = {
  guestCount: 2,
  guestList: [
    'Maedeh Safari',
    'Surabhi Nigam'
  ]
};

const globalReducer = handleActions({
  INCREMENT: (state, action) => (
    Object.assign({}, state, {
      guestCount: state.guestCount + 1
    })
  ),
  ADD_GUEST: (state, action) => (
    Object.assign({}, state, {
      guestList: state.guestList.concat(action.payload)
    })
  )
}, initialState);

export default globalReducer;
