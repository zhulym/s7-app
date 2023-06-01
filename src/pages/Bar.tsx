import React, { FC } from 'react';
import { Box } from "@mui/material";

import BarChart from '../components/bar/BarChart';
import DashboardHeader from 'components/page-header/PageHeader';

const Bar: FC = () => {
  return (
    <Box m="20px">
      <DashboardHeader title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
