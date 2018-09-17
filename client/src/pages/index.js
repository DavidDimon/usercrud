import React from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import UserList from '../components/UserList';
import Header from '../components/Header';
import { TextField } from '@material-ui/core';

const styles = {
  containerSearch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  searchInput: {
    width: 400
  }
};

const Home = ({
  users,
  removeUser,
  editUser,
  classes,
  search,
  openModal,
  onCloseModal,
  confirmRemoveUser,
  userId
}) => (
  <Header title={'Users'}>
    <div className={classes.containerSearch}>
      <TextField
        className={classes.searchInput}
        label={'Search'}
        placeholder={'Search by name, username or e-mail..'}
        onChange={e => {
          search(e.target.value);
        }}
      />
    </div>
    <UserList
      items={users}
      removeUser={removeUser}
      editUser={editUser}
      openModal={openModal}
      confirmRemoveUser={confirmRemoveUser}
      onCloseModal={onCloseModal}
      userId={userId}
    />
  </Header>
);

Home.propTypes = {
  users: propTypes.array,
  removeUser: propTypes.func,
  editUser: propTypes.func,
  classes: propTypes.object,
  search: propTypes.func,
  openModal: propTypes.bool,
  onCloseModal: propTypes.func,
  confirmRemoveUser: propTypes.func,
  userId: propTypes.number
};

export default withStyles(styles)(Home);
