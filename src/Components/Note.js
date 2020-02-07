import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 375,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Note = ({title, description, onDeleteNote }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={onDeleteNote}>
            <DeleteIcon />
          </IconButton>
        }
        title={title}
      />
      <CardContent>{description}</CardContent>
    </Card>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  archived: PropTypes.bool.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

export { Note };
