import { Box } from 'native-base';
import React from 'react';

import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import RecentActivities from '../components/RecentActivities';
import allActivities from '../utils/mocks/activities';

const IncomeAnalytics = () => {
  return (
    <Container>
      <Header heading="Rendimentos" />
      <Box h="192px" my="12" />
      <RecentActivities
        data={allActivities.filter(({ type }) => type === 'receive')}
      />
    </Container>
  );
};

export default IncomeAnalytics;
