import React, { ChangeEvent, FC } from 'react';
import { tokens } from 'theme';
import Papa, { ParseResult } from 'papaparse';
import { Box, Button, useTheme } from '@mui/material';

import { useAppDispatch, } from 'hooks/reduxHooks';
import { SET_DATA_PARSING, SET_LINES_DATA } from 'store/slices/linesSlice';

const SideBarFile: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useAppDispatch();

  const onFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(SET_DATA_PARSING(true));
    try {
      const file = e.target.files && e.target.files[0];
      Papa.parse(file as File, {
        header: false,
        delimiter: ",",
        complete: (results: ParseResult<string[]>) => {
          dispatch(SET_LINES_DATA(results.data));
        }
      });
    } finally {
      dispatch(SET_DATA_PARSING(false));
    }
  };

  return (
    <Box mb="25px">
      <Box textAlign="center">
        <Button
          variant="contained"
          component="label"
          sx={{ width: 250, backgroundColor: colors.greenAccent[700] }}
        >
          Upload file *.csv
          <input type="file" hidden onChange={onFileUpload} accept="text/csv" />
        </Button>
      </Box>
    </Box >
  );
};

export default SideBarFile;
