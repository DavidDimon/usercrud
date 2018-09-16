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

const UserListItem = ({ item, onRemove, editUser }) => (
  <TableRow key={item.id}>
    <TableCell component="th" scope="row">
      {item.id}
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
          onRemove(e, item.id);
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
      to={'/userForm'}
      component={Link}
    >
      {'Add new user'}
      <AddIcon />
    </Button>
  </TableFooter>
);

const UserList = ({ items, onRemove, classes, editUser }) => (
  <Paper className={classes.root}>
    <Table>
      <UserListHeader />
      <TableBody>
        {items.map((item, index) => (
          <UserListItem
            key={index}
            item={item}
            onRemove={onRemove}
            editUser={editUser}
          />
        ))}
      </TableBody>
      {!items || items.length === 0 ? 'User list is empty' : ''}
      <UserListFooter classes={classes} />
    </Table>
  </Paper>
);

UserListItem.propTypes = {
  item: propTypes.object,
  onRemove: propTypes.func
};

UserList.propTypes = {
  classes: propTypes.object,
  items: propTypes.array,
  onRemove: propTypes.func,
  editUser: propTypes.func
};

export default withStyles(styles)(UserList);
