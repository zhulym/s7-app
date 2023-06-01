import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import { Sidebar, Menu, useProSidebar, MenuItem } from 'react-pro-sidebar';
import { Box, useTheme, Typography, IconButton, TextField } from '@mui/material';

import { tokens } from 'theme';
import { useAppDispatch } from 'hooks/reduxHooks';
import { MAX_POINTS_SIZE } from 'constants/lines';
import { SIDE_BAR_PAGES } from 'constants/sideBar';
import { SET_POINTS_NUMBER } from 'store/slices/linesSlice';

import SideBarItem from './SideBarItem';
import SideBarFile from './SideBarFile';
import SideBarTags from './SideBarTags';
import SideBarTagsType from './SideBarTagsType';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";

import styles from './SideBar.module.scss';

const SideBar: FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const colors = tokens(theme.palette.mode);
  const [tempValue, setTempValue] = useState(50);
  const [selected, setSelected] = useState("Line Chart");
  const { collapseSidebar, collapsed } = useProSidebar();

  const onToggleSideBar = () => {
    collapseSidebar(!collapsed);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((num: number) => {
      dispatch(SET_POINTS_NUMBER(+num + 1));
    }, 300),
    [],
  );

  const onPointsNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const num = +e.target.value || 0;

    if (num < 1000 || typeof num === 'number') {
      setTempValue(num);
      updateSearchValue(num);
    }
  };

  return (
    <Box
      height="100%"
      className={styles.container}
      sx={{
        "& .sidebar-inner": {
          background: `${colors.primary[400]}`,
        },
        "& .menu-icon": {
          backgroundColor: "transparent",
        },
        "& .menu-item": {
          "& .menu-anchor": {
            paddingLeft: 0,
            transition: "color 0.3s ease",
          },

          "& .menu-anchor:hover": {
            color: "#868dfb !important",
            backgroundColor: 'transparent'
          },

          "& .menu-anchor.cxRqFw": {
            color: "#6870fa !important",
            backgroundColor: 'transparent'
          },
        },
      }}
    >
      <Sidebar className={classNames(styles.sidebar, {
        [styles.sidebarWidth]: !collapsed
      })}>
        <Menu>
          <MenuItem
            onClick={onToggleSideBar}
            icon={collapsed && <MenuOutlinedIcon />}
            style={{ margin: "5px 0px", color: colors.grey[100] }}
          >
            {!collapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ ml: "25px" }}>
                <Typography variant="h3" color={colors.grey[100]}>
                  S7
                </Typography>
                <IconButton onClick={onToggleSideBar}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!collapsed && <SideBarFile />}

          <Box sx={{ ml: "25px" }}>
            <SideBarItem
              title="Line Chart"
              path="/s7-app"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!collapsed && <SideBarTags />}
            {!collapsed && <SideBarTagsType />}
            {!collapsed && (
              <>
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                >
                  Number of points ({MAX_POINTS_SIZE} max)
                </Typography>
                <TextField
                  value={tempValue}
                  id="outlined-basic"
                  variant="outlined"
                  onChange={onPointsNumber}
                  sx={{ mb: "15px", width: "250px" }}
                  size="small"
                />
              </>
            )}

            <Typography
              variant="h6"
              color={colors.grey[300]}
            >
              Pages
            </Typography>
            {SIDE_BAR_PAGES.map(item => (
              <SideBarItem
                key={item.title}
                title={item.title}
                path={item.path}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </Box>
        </Menu>

        {!collapsed && (
          <Typography variant="h5" sx={{ ml: "35px" }}>
            <a
              href="https://github.com/zhulym"
              style={{ color: colors.greenAccent[500], textDecoration: "none" }}
              target="_blanc"
            >
              &copy; {new Date().getFullYear()} S.ZHULYM
            </a>
          </Typography>
        )}
      </Sidebar>
    </Box >
  );
};

export default SideBar;
