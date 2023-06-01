import React, { ChangeEvent, FC } from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';

import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { UPDATE_TYPED_FILTER } from 'store/slices/linesSlice';

import styles from './SideBar.module.scss';

const SideBarTagsType: FC = () => {
  const dispatch = useAppDispatch();
  const typedFilter = useAppSelector((state) => state.lines.typedFilter);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(UPDATE_TYPED_FILTER({ name: e.target.name, checked: e.target.checked }));
  };

  return (
    <Box className={styles.typedTags}>
      <FormControl sx={{ pl: '15px' }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            label="Starting points"
            control={<Checkbox checked={typedFilter["starting"]} onChange={onChange} name="starting" />}
          />

          <FormControlLabel
            label="Averaged points"
            control={<Checkbox checked={typedFilter["averaged"]} onChange={onChange} name="averaged" />}
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default SideBarTagsType;
