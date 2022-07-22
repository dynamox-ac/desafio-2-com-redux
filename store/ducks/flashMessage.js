import { createActions, createReducer } from 'reduxsauce';

/**
 * Types
 */
export const { Types, Creators } = createActions({
  showMessage: ['settings'],
  hideMessage: []
});

/**
 * Reducer handlers
 */
const INITIAL_STATE = {
  id: null,
  message: null,
  open: false,
  variant: 'error',
  params: null
};

const showMessage = (state = INITIAL_STATE, action) => {
  console.log('show message action', action);
  return {...state,
  id: action.settings.id || null,
  duration: action.settings.duration,
  message: action.settings.message || null,
  variant: action.settings.variant || 'error',
  params: action.settings.params || null,
  open: true}
};

const hideMessage = (state = INITIAL_STATE) => ({
  ...state,
  open: false
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.SHOW_MESSAGE]: showMessage,
  [Types.HIDE_MESSAGE]: hideMessage
});
