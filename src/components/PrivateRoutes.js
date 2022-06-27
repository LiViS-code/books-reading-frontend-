import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/selectors/auth-selectors';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/" />;
}
