import { combineReducers } from "redux";
import { noteReducer as notes } from "./notesReducer";
import { visibilityFiltersReducer as visibilityFilter } from "./visibilityFiltersReducer";
/*
State:
  {
    notes: [
      note
    ],
    visibilityFilter: SHOW_ALL | SHOW_ACTIVE | SHOW_ARCHIVED
  }

  note: {
    id,
    title,
    description:
    archived
  }
*/
export default combineReducers({
  notes,
  visibilityFilter
});
