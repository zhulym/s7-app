import React, { FC } from 'react';
import { Box } from '@mui/material';

import LineChart from './LineChart';
import DashboardHeader from 'components/page-header/PageHeader';

type Props = {};

const Line: FC = (props: Props) => {
  return (
    <Box m="20px">
      <DashboardHeader title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
