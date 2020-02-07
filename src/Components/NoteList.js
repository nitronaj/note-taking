import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import { Note } from './Note';

const NoteList = ({ notes, removeNote }) => {
  return notes.map(({ id, ...note }) => (
    <Grid key={id} item>
      <Note {...note} onDeleteNote={() => removeNote(id)} />
    </Grid>
  ));
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      archived:PropTypes.bool.isRequired,
    }),
  ),
};

export { NoteList };
