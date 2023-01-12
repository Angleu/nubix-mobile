import { Center, Spinner } from 'native-base';

import useUser from '../hooks/useUser';
import AuthRoute from './AuthRoute';
import MainRoute from './MainRoute';

const RootRoute = () => {
  const { isAuthenticated, isLoading } = useUser();

  if (isLoading)
    return (
      <Center flex={1}>
        <Spinner color="primary.100" size="lg" />
      </Center>
    );

  if (isAuthenticated) return <MainRoute />;
  return <AuthRoute />;
};

export default RootRoute;
