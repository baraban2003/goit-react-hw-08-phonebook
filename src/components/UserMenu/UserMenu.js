import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

export default function UserMenu({ email }) {
  const dispatch = useDispatch();
  return (
    <div>
      <a href="mailto: {email}">{email}</a>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
}
