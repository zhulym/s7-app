/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PropsWithChildren } from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { ColorModeContext } from '../../theme';
import { useThemeMode } from 'hooks/useThemeMode';

import TopBar from 'components/top-bar/TopBar';
import SideBar from 'components/side-bar/SideBar';

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const [theme, colormode] = useThemeMode();

  return (
    <ColorModeContext.Provider value={colormode as any}>
      <ThemeProvider theme={theme as any}>
        <CssBaseline />
        <div className="app">
          <ProSidebarProvider>
            <SideBar />
          </ProSidebarProvider>

          <main className="content">
            <TopBar />
            {children}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Layout;
