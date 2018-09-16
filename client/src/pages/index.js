import React from 'react';
import propTypes from 'prop-types';
import UserList from '../components/UserList';
import Header from '../components/Header';

const Home = ({ users, removeUser }) => (
  <Header title={'Users'}>
    <UserList items={users} onRemove={removeUser} />
  </Header>
);

Home.propTypes = {
  users: propTypes.array,
  removeUser: propTypes.func
};

export default Home;
