import React from 'react';

import AnalyticsCalendar from '../components/AnalyticsCalendar';
import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import RecentActivities from '../components/RecentActivities';
import allActivities from '../utils/mocks/activities';

const IncomeAnalytics = () => {
  return (
    <Container>
      <Header heading="Rendimentos" />
      <AnalyticsCalendar />
      <RecentActivities
        data={allActivities.filter(({ type }) => type === 'receive')}
      />
    </Container>
  );
};

export default IncomeAnalytics;
