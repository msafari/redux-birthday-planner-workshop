import {
  ADD_GUEST,
  INCREMENT
} from './constants';

export function addGuest(guest) {
  return {
    type: ADD_GUEST,
    guest
  };
}

export function increment() {
  return {
    type: INCREMENT
  };
}
