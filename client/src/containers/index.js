import { compose, lifecycle, withHandlers, withState } from 'recompose';
import { withRouter } from 'react-router-dom';
import Home from '../pages';
import { fetchUsers, deleteUser, searchUsers } from '../services/requests';

const loadUsers = ({ setUsers }) => async () => {
  const users = await fetchUsers();
  setUsers(users);
};

const removeUser = ({ setUsers }) => async (e, userId) => {
  e.preventDefault();
  const message = await deleteUser(userId);
  console.log(message);
  const users = await fetchUsers();
  setUsers(users);
};

const editUser = ({ history }) => user => {
  history.push('/userForm', user);
};

const search = ({ setUsers }) => async value => {
  const result = await searchUsers(value);
  setUsers(result);
};

const enhance = compose(
  withRouter,
  withState('users', 'setUsers', []),
  withHandlers({ loadUsers, removeUser, search, editUser }),
  lifecycle({
    async componentWillMount() {
      const { loadUsers } = this.props;
      await loadUsers();
    }
  })
);

export default enhance(Home);
