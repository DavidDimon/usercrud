import { compose, withState, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import UserForm from '../pages/userForm';
import { saveUser } from '../services/requests';
import { DEFAULT_USER } from '../contants';

const changeCard = ({ setShowBasicInfo }) => (e, next) => {
  e.preventDefault();
  setShowBasicInfo(next);
};

const onChangeValue = ({ setUser, user }) => (key, value) => {
  const newUser = user;
  newUser[key] = value;
  setUser(newUser);
};

const submit = ({ user, history }) => async e => {
  e.preventDefault();
  if (!user.id) {
    user.isEnabled = true;
  }
  const result = await saveUser(user);
  if (result) {
    history.push('/');
  }
};

const enhance = compose(
  withRouter,
  withState(
    'user',
    'setUser',
    ({ location }) =>
      location && location.state
        ? JSON.parse(JSON.stringify(location.state))
        : DEFAULT_USER
  ),
  withState('showBasicInfo', 'setShowBasicInfo', false),
  withHandlers({ changeCard, submit, onChangeValue })
);

export default enhance(UserForm);
