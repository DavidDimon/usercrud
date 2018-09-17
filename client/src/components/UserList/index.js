import React from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  TableFooter,
  Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment';
import AlertConfirm from '../AlertConfirm';

const styles = {
  root: {
    width: '100%'
  },
  table: {
    minWidth: 400
  },
  addButton: {
    maxHeight: 50,
    maxWidth: 200,
    alignSelf: 'flex-end'
  },
  emptyList: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: '20px'
  }
};

const UserListItem = ({ item, editUser, confirmRemoveUser }) => (
  <TableRow key={item.id}>
    <TableCell component="th" scope="row">
      <Button
        onClick={e => {
          editUser(e, item);
        }}
      >
        {item.id}
      </Button>
    </TableCell>
    <TableCell>{item.username}</TableCell>
    <TableCell>{item.isEnabled ? 'Yes' : 'No'}</TableCell>
    <TableCell>
      {moment(item.registerDate).format('DD/MM/YYYY - HH:mm:ss')}
    </TableCell>
    <TableCell>{item.name}</TableCell>
    <TableCell>{item.surname}</TableCell>
    <TableCell>{item.email}</TableCell>
    <TableCell>{item.phone}</TableCell>
    <TableCell>
      <IconButton
        aria-label="Delete"
        onClick={e => {
          confirmRemoveUser(e, item.id);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </TableCell>
  </TableRow>
);

const UserListHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell>{'id'}</TableCell>
      <TableCell>{'Username'}</TableCell>
      <TableCell>{'Is Enabled?'}</TableCell>
      <TableCell>{'Register Date'}</TableCell>
      <TableCell>{'Name'}</TableCell>
      <TableCell>{'Surname'}</TableCell>
      <TableCell>{'E-mail'}</TableCell>
      <TableCell>{'Phone'}</TableCell>
      <TableCell>{'Actions'}</TableCell>
    </TableRow>
  </TableHead>
);

const UserListFooter = ({ classes }) => (
  <TableFooter>
    <Button
      color="primary"
      className={classes.addButton}
      to={{ pathname: '/userForm', state: null }}
      component={Link}
    >
      {'Add new user'}
      <AddIcon />
    </Button>
  </TableFooter>
);

const UserList = ({
  items,
  removeUser,
  classes,
  editUser,
  openModal,
  onCloseModal,
  confirmRemoveUser,
  userId
}) => (
  <Paper className={classes.root}>
    <Table>
      <UserListHeader />
      <TableBody>
        {items.map((item, index) => (
          <UserListItem
            key={index}
            item={item}
            confirmRemoveUser={confirmRemoveUser}
            editUser={editUser}
          />
        ))}
      </TableBody>
      {!items || items.length === 0 ? 'User list is empty' : ''}
      <UserListFooter classes={classes} />
    </Table>
    <AlertConfirm
      title={'Confirm user delection'}
      message={`Do you want remove the user with id: ${userId}?`}
      open={openModal}
      onClose={onCloseModal}
      submit={e => {
        removeUser(e);
      }}
    />
  </Paper>
);

UserListItem.propTypes = {
  item: propTypes.object,
  editUser: propTypes.func,
  confirmRemoveUser: propTypes.func
};

UserList.propTypes = {
  items: propTypes.array,
  removeUser: propTypes.func,
  classes: propTypes.object,
  editUser: propTypes.func,
  openModal: propTypes.bool,
  onCloseModal: propTypes.func,
  confirmRemoveUser: propTypes.func,
  userId: propTypes.number
};

export default withStyles(styles)(UserList);
