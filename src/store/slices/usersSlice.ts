import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfileForm } from 'model/app';
import type { RootState } from '../store';

interface IState {
  newUser: IProfileForm | {};
}

const initialState: IState = {
  newUser: {},
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<IProfileForm>) => {
      state.newUser = action.payload;
    },
  },
});

export const { setFormData } = usersSlice.actions;
export const selectCount = (state: RootState) => state.users;
export default usersSlice.reducer;
