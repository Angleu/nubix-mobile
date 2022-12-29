import AuthRoute from './AuthRoute';
import MainRoute from './MainRoute';

const RootRoute = () => {
  const isAuthenticated = true;

  if (isAuthenticated) return <MainRoute />;
  return <AuthRoute />;
};

export default RootRoute;
