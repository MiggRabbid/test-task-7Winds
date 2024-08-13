import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { iResponse } from '../../../models/interface';

interface iInitialState {
  rowState: boolean;
  tableData: iResponse;
}

const initialState: iInitialState = {
  rowState: false,
  tableData: [],
};

const rowSlice = createSlice({
  name: 'row',
  initialState,
  reducers: {
    openEdit: (state) => {
      return {
        ...state,
        rowState: true,
      };
    },
    closedEdit: (state) => {
      return {
        ...state,
        rowState: false,
      };
    },
    setTableData: (state, action: PayloadAction<iResponse>) => {
      return {
        ...state,
        tableData: action.payload,
      };
    },
  },
});

export const { actions } = rowSlice;

export default rowSlice.reducer;
