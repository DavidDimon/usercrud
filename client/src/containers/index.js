import { compose, lifecycle, withHandlers, withState } from 'recompose';
import App from '../components/';

const loadUsers = ({ setUsers }) => async () => {
  const response = await fetch('http://localhost:8080/user/', {
    method: 'get'
  });
  const users = await response.json();
  console.log(users);
  setUsers(users);
};

const enhance = compose(
  withState('users', 'setUsers', []),
  withHandlers({ loadUsers }),
  lifecycle({
    async componentWillMount() {
      const { loadUsers } = this.props;
      await loadUsers();
    }
  })
);

export default enhance(App);
