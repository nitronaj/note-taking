import { connect} from 'react-redux';
import { VisibilityFilters } from "../actions/actionTypes";
import {removeNote, toggleNote} from '../actions/actionsCreator';
import {NoteList} from '../Components/NoteList';


const getNotes = (notes, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return notes.filter(note => note.archived === false);
    case VisibilityFilters.SHOW_ARCHIVED:
      return notes.filter(note => note.archived === true);
    case VisibilityFilters.SHOW_ALL:
    default:
      return notes;
  }
};

const mapStateToProps = state => {
  return {
    notes: getNotes(state.notes, state.visibilityFilter)
  };
};

const mapDispatchToProps = {
  removeNote,
  toggleNote
}

export const VisibleNoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);
