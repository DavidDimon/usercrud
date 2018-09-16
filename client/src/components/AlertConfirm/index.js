import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, Typography, Button } from '@material-ui/core';

const styles = {
  container: {
    padding: 20
  },
  footer: {
    display: 'flex',
    paddingTop: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  }
};

const AlertConfirm = ({ title, message, open, onClose, submit, classes }) => (
  <Dialog open={open} onClose={onClose} aria-labelledby="simple-dialog-title">
    <DialogTitle id="dialog-title">{title}</DialogTitle>
    <div className={classes.container}>
      <Typography variant="title" color="inherit">
        {message}
      </Typography>
      <div className={classes.footer}>
        <Button color="secondary" onClick={onClose}>
          {'Cancel'}
        </Button>
        <Button color="primary" onClick={submit}>
          {'Confirm'}
        </Button>
      </div>
    </div>
  </Dialog>
);

export default withStyles(styles)(AlertConfirm);
