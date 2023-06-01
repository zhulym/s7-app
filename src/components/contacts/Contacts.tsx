/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import { tokens } from 'theme';
import { IContactData } from 'model/app';
import useFetch from 'hooks/useFetch';
import ApiService from 'service/ApiService';

import Loader from 'components/loader/Loader';
import DashboardHeader from 'components/page-header/PageHeader';
import { contactsGridColumns } from 'constants/contactsGridColumns';

const Contacts: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data: contacts, isLoading } = useFetch<IContactData[]>(ApiService.getContactData);

  if (isLoading) return <Loader />;

  return (
    <Box m="20px">
      <DashboardHeader title="CONTACTS" subtitle="List of Contacts for Future Reference" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            border: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={contacts || []}
          columns={contactsGridColumns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
