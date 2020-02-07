import { connect } from "react-redux";
import { addNote } from "../actions/actionsCreator";
import { AddNote } from "../Components/AddNote";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (note) => {
      dispatch(addNote(note));
    }
  };
};

export const AddNoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNote);
