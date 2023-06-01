import React, { FC, useContext } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';

import { tokens, ColorModeContext } from 'theme';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const TopBar: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const onToggleMode = () => {
    colorMode.toggleColorMode();
  };

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      p={2}
      gap={2}
      paddingBottom={0}
    >
      <Box
        display="flex"
        borderRadius={1}
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <IconButton type="button" onClick={onToggleMode}>
          {theme.palette.mode === 'dark' ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton type="button">
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
