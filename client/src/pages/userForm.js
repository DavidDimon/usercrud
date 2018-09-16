import React from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, TextField, Typography, Button } from '@material-ui/core';
import Header from '../components/Header';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    minWidth: 300
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    display: 'flex',
    paddingTop: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  }
});

const LoginInfo = ({ user, classes, next, onChangeValue }) => (
  <div className={classes.container}>
    <Paper className={classes.root}>
      <div className={classes.formControl}>
        <Typography variant="headline" component="h3">
          Login info
        </Typography>
        <TextField
          id="username"
          label="Username"
          placeholder="Username"
          value={user.username}
          onChange={e => {
            onChangeValue('username', e.target.value);
          }}
        />
        <TextField
          id="password"
          label="Password"
          placeholder="Password"
          type="password"
          value={user.password}
          onChange={e => {
            onChangeValue('password', e.target.value);
          }}
        />
        <div className={classes.footer}>
          <Button color="primary" onClick={next}>
            {'Next'}
          </Button>
        </div>
      </div>
    </Paper>
  </div>
);

const BasicInfo = ({ user, classes, back, submit, onChangeValue }) => (
  <div className={classes.container}>
    <Paper className={classes.root}>
      <div className={classes.formControl}>
        <Typography variant="headline" component="h3">
          More info
        </Typography>
        <TextField
          id="name"
          label="Name"
          placeholder="Name"
          value={user.name}
          onChange={e => {
            onChangeValue('name', e.target.value);
          }}
        />
        <TextField
          id="surname"
          label="Surname"
          placeholder="Surname"
          value={user.surname}
          onChange={e => {
            onChangeValue('surname', e.target.value);
          }}
        />
        <TextField
          id="email"
          label="E-mail"
          placeholder="E-mail"
          value={user.email}
          onChange={e => {
            onChangeValue('email', e.target.value);
          }}
        />
        <TextField
          id="phone"
          label="Phone"
          placeholder="Phone"
          value={user.phone}
          onChange={e => {
            onChangeValue('phone', e.target.value);
          }}
        />
        <div className={classes.footer}>
          <Button color="primary" onClick={back}>
            {'Back'}
          </Button>
          <Button
            color="primary"
            onClick={e => {
              submit(e);
            }}
          >
            {'Submit'}
          </Button>
        </div>
      </div>
    </Paper>
  </div>
);

const UserForm = ({
  user,
  classes,
  showBasicInfo,
  changeCard,
  onChangeValue,
  submit
}) => (
  <Header>
    <form>
      {showBasicInfo ? (
        <BasicInfo
          user={user}
          onChangeValue={onChangeValue}
          classes={classes}
          submit={submit}
          back={e => {
            changeCard(e, false);
          }}
        />
      ) : (
        <LoginInfo
          user={user}
          onChangeValue={onChangeValue}
          classes={classes}
          next={e => {
            changeCard(e, true);
          }}
        />
      )}
    </form>
  </Header>
);

LoginInfo.propTypes = {
  user: propTypes.object,
  classes: propTypes.object,
  next: propTypes.func,
  submit: propTypes.func,
  onChangeValue: propTypes.func
};

BasicInfo.propTypes = {
  user: propTypes.object,
  classes: propTypes.object,
  back: propTypes.func,
  submit: propTypes.func,
  onChangeValue: propTypes.func
};

UserForm.propTypes = {
  user: propTypes.object,
  classes: propTypes.object,
  showBasicInfo: propTypes.bool,
  changeCard: propTypes.func,
  onChangeValue: propTypes.func,
  submit: propTypes.func
};

export default withStyles(styles)(UserForm);
