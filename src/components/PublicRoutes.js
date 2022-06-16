import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/selectors/auth-selectors';
import AuthView from '../views/AuthView/AuthView';
export default function PublicRoute({ restricted = false }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return <>{shouldRedirect ? <Navigate to="library" /> : <AuthView />}</>;
}
