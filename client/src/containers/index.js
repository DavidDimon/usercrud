import { compose, lifecycle, withHandlers, withState } from 'recompose';
import { withRouter } from 'react-router-dom';
import Home from '../pages';
import { fetchUsers, deleteUser, searchUsers } from '../services/requests';

const loadUsers = ({ setUsers }) => async () => {
  const users = await fetchUsers();
  setUsers(users);
};

const onCloseModal = ({ setOpenModal }) => e => {
  e.preventDefault();
  setOpenModal(false);
};

const confirmRemoveUser = ({ setOpenModal, setUserId }) => (e, userId) => {
  e.preventDefault();
  setOpenModal(true);
  setUserId(userId);
};

const removeUser = ({ setUsers, setOpenModal, userId }) => async e => {
  e.preventDefault();
  if (userId) {
    const message = await deleteUser(userId);
    console.log(message);
  }
  setOpenModal(false);
  const users = await fetchUsers();
  setUsers(users);
};

const editUser = ({ history }) => (e, userSelected) => {
  e.preventDefault();
  history.push('/userForm', userSelected);
};

const search = ({ setUsers }) => async value => {
  const result = await searchUsers(value);
  setUsers(result);
};

const enhance = compose(
  withRouter,
  withState('users', 'setUsers', []),
  withState('userId', 'setUserId', null),
  withState('openModal', 'setOpenModal', false),
  withHandlers({
    loadUsers,
    confirmRemoveUser,
    onCloseModal,
    removeUser,
    search,
    editUser
  }),
  lifecycle({
    async componentWillMount() {
      const { loadUsers } = this.props;
      await loadUsers();
    }
  })
);

export default enhance(Home);
