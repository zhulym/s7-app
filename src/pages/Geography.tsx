import React, { FC } from 'react';
import { Box, useTheme } from "@mui/material";

import { tokens } from "theme";

import GeographyChart from '../components/geography/GeographyChart';
import DashboardHeader from 'components/page-header/PageHeader';

const Geography: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <DashboardHeader title="Geography" subtitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
