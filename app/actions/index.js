import { createAction } from 'redux-actions';

export const addGuest = createAction('ADD_GUEST');
export const increment = createAction('INCREMENT');
export const confirmGuest = createAction('CONFIRM_GUEST');
export const declineGuest = createAction('DECLINE_GUEST');
