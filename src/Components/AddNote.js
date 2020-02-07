import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '30px',
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '500px',
    },
    '& .MuiInput-underline:before, & .MuiInput-underline:after': {
      border: 'none !important',
    },
    paddingBottom: '10px',
  },
}));

export const AddNote = ({ onSubmit }) => {
  const classes = useStyles();
  const initialState = {
    title: '',
    description: '',
  };

  const [state, setState] = useState(initialState);
  const [saveBtnDisabled, setSaveBtnDisabled] = useState(true);
  const handleTitleChange = event => {
    if (event.target.value.length) {
      setSaveBtnDisabled(false);
    } else {
      setSaveBtnDisabled(true);
    }

    setState({ ...state, title: event.target.value });
  };

  const handleDesChange = event => {
    setState({ ...state, description: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(state);
    setSaveBtnDisabled(true);
    setState(initialState);
  };

  return (
    <Paper elevation={3} className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
          <TextField required placeholder="Title" onChange={handleTitleChange} value={state.title} />
          <TextField
            multiline
            rows="4"
            placeholder="Take a note"
            onChange={handleDesChange}
            value={state.description}
          />
        </Grid>

        <Grid container direction="row" justify="space-around" alignItems="center">
          <Button type="submit" color="primary" disabled={saveBtnDisabled}>
            Save
          </Button>
          <Button>Close</Button>
        </Grid>
      </form>
    </Paper>
  );
};
