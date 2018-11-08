import { handleActions } from 'redux-actions';

const initialState = {
  guestCount: 2,
  numConfirmed: 0,
  guestList: {
    'Maedeh Safari': {
      confirmed: false,
      declined: false
    },
    'Surabhi Nigam': {
      confirmed: false,
      declined: false
    }
  }
};

const globalReducer = handleActions({
  INCREMENT: (prevState, action) => (
    Object.assign({}, prevState, {
      guestCount: prevState.guestCount + 1
    })
  ),
  ADD_GUEST: (prevState, action) => {
    prevState.guestList[action.payload] = {
      confirmed: false,
      declined: false
    };

    return Object.assign({}, prevState, {
      guestList: prevState.guestList
    })
  },
  CONFIRM_GUEST: (prevState, action) => {
    return Object.assign({}, prevState, {
      numConfirmed: prevState.numConfirmed + 1,
      guestList: {
        ...prevState.guestList,
        [action.payload]: {
          confirmed: true,
          declined: false
        }
      }
    });
  },
  DECLINE_GUEST: (prevState, action) => {
    return Object.assign({}, prevState, {
      // bonus: reduce confirmed num if guest was already confirmed before
      guestList: {
        ...prevState.guestList,
        [action.payload]: {
          confirmed: false,
          declined: true
        }
      }
    })
  }
}, initialState);

export default globalReducer;
