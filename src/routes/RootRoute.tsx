import { useUser } from '../hooks';
import AuthRoute from './AuthRoute';
import MainRoute from './MainRoute';

const RootRoute = () => {
  const { isAuthenticated } = useUser();

  if (isAuthenticated) return <MainRoute />;
  return <AuthRoute />;
};

export default RootRoute;
