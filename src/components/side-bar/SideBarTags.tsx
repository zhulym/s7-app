import React, { ChangeEvent, FC } from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Typography, useTheme } from '@mui/material';

import { tokens } from 'theme';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { UPDATE_TAGS } from 'store/slices/linesSlice';

import styles from './SideBar.module.scss';

const SideBarTags: FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const colors = tokens(theme.palette.mode);
  const tags = useAppSelector((state) => state.lines.tags);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(UPDATE_TAGS({ name: e.target.name, checked: e.target.checked }));
  };

  return (
    <>
      <Typography variant="h6" color={colors.grey[300]}>
        Tags
      </Typography>
      <Box className={styles.tags}>

        <FormControl sx={{ pl: '15px' }} component="fieldset" variant="standard">
          <FormGroup>
            {Object.keys(tags).map(tag => (
              <FormControlLabel
                key={tag}
                label={tag}
                control={<Checkbox checked={tags[tag]} onChange={onChange} name={tag} />}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default SideBarTags;
