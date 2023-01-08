import React from 'react';

import AnalyticsCalendar from '../components/AnalyticsCalendar';
import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import RecentActivities from '../components/RecentActivities';
import allActivities from '../utils/mocks/activities';

const ExpenseAnalytics = () => {
  return (
    <Container>
      <Header heading="Gastos" />
      <AnalyticsCalendar />
      <RecentActivities
        data={allActivities.filter(
          ({ type }) => type === 'payment' || type === 'send'
        )}
      />
    </Container>
  );
};

export default ExpenseAnalytics;
