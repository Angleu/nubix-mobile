import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

import { useUser } from '../hooks';
import AuthRoute from './AuthRoute';
import MainRoute from './MainRoute';

const RootRoute = () => {
  const { isAuthenticated } = useUser();
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  if (isAuthenticated) return <MainRoute />;
  return <AuthRoute />;
};

export default RootRoute;
