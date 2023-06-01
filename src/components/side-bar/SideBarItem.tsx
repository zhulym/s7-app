import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Typography, useTheme } from '@mui/material';
import { MenuItem } from 'react-pro-sidebar';

import { tokens } from 'theme';

import styles from './SideBar.module.scss';

interface IProps {
  title: string;
  path: string;
  icon: ReactElement;
  selected: string;
  setSelected: (selected: string) => void;
}

const SideBarItem: FC<IProps> = ({ title, path, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const onMenuItem = () => {
    setSelected(title);
  };

  return (
    <MenuItem
      icon={icon}
      onClick={onMenuItem}
      style={{ color: colors.grey[100] }}
      routerLink={<Link to={path} />}
    >
      <Typography className={selected === title ? styles.active : ''}>
        {title}
      </Typography>
    </MenuItem>
  );
};

export default SideBarItem;
