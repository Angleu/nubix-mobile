import AuthRoute from './AuthRoute';
import MainRoute from './MainRoute';

const RootRoute = () => {
  const isAuthenticated = false;

  if (isAuthenticated) return <MainRoute />;
  return <AuthRoute />;
};

export default RootRoute;
