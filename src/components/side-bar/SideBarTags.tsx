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

        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
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

        {/* <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              label="Starting points"
              control={<Checkbox checked={false} onChange={onChange} name="starting" />}
            />

            <FormControlLabel
              label="Averaged points"
              control={<Checkbox checked={false} onChange={onChange} name="averaged" />}
            />
          </FormGroup>
        </FormControl> */}
      </Box>
    </>
  );
};

export default SideBarTags;
