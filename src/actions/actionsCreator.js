import { ADD_NOTE, REMOVE_NOTE, TOGGLE_NOTE, SET_VISIBILITY_FILTER } from './actionTypes';

export const addNote = note => ({
  type: ADD_NOTE,
  payload: {
    ...note,
    archived: false,
  },
});

export const removeNote = id => ({
  type: REMOVE_NOTE,
  payload: {
    id,
  },
});

export const toggleNote = id => ({
  type: TOGGLE_NOTE,
  payload: {
    id,
  },
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: {
    filter,
  },
});
