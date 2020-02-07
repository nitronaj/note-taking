import { v4 as uuid } from 'uuid';
import { ADD_NOTE, REMOVE_NOTE, TOGGLE_NOTE } from '../actions/actionTypes';

import data from './notes.json';
/*
  note = {
    id: integer,
    title: String,
    description: String,
    archived: Boolean
  }
*/
const initialState = [...data.notes];

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: uuid(),
          ...action.payload,
        },
      ];
    case REMOVE_NOTE:
      return state.filter(note => note.id !== action.payload.id);

    case TOGGLE_NOTE:
      return state.map(note => {
        if (note.id === action.payload.id) {
          return {
            ...note,
            archived: !note.archived,
          };
        }

        return note;
      });
    default:
      return state;
  }
};
