import React, { FC } from 'react';
import { Box } from '@mui/material';

import PieChart from './PieChart';
import DashboardHeader from 'components/page-header/PageHeader';

type Props = {};

const Pie: FC = (props: Props) => {
  return (
    <Box m="20px">
      <DashboardHeader title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
