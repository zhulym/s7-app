import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILinesState, ITag } from 'model/app';
import type { RootState } from '../store';
import { MAX_POINTS_SIZE } from 'constants/lines';

const initialState: ILinesState = {
  linesData: [],
  isParsing: false,
  pointsAmount: 50,
  tags: {},
  typedFilter: {
    starting: false,
    averaged: false,
  },
};

export const linesSlice = createSlice({
  name: 'lines',
  initialState,
  reducers: {
    SET_DATA_PARSING(state, action: PayloadAction<boolean>) {
      state.isParsing = action.payload;
    },
    SET_LINES_DATA: (state, action: PayloadAction<Array<string[]> | undefined>) => {
      state.linesData = action.payload?.slice(0, MAX_POINTS_SIZE);
    },
    SET_POINTS_NUMBER: (state, action: PayloadAction<number>) => {
      state.pointsAmount = action.payload;
    },
    SET_TAGS: (state, action: PayloadAction<ITag>) => {
      state.tags = action.payload;
    },
    UPDATE_TAGS: (state, action: PayloadAction<{ name: string, checked: boolean }>) => {
      state.tags[action.payload.name] = action.payload.checked;
    },
    UPDATE_TYPED_FILTER: (state, action: PayloadAction<{ name: string, checked: boolean }>) => {
      state.typedFilter[action.payload.name] = action.payload.checked;
    },
  },
});

export const {
  SET_LINES_DATA,
  SET_DATA_PARSING,
  SET_POINTS_NUMBER,
  SET_TAGS,
  UPDATE_TAGS,
  UPDATE_TYPED_FILTER,
} = linesSlice.actions;
export const selectCount = (state: RootState) => state.lines;
export default linesSlice.reducer;
