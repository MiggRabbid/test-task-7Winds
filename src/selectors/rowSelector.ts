import { RootState } from '../app/store/index';

export const getEditState = (state: RootState) => state.rowReducer.rowState;
export const getTableData = (state: RootState) => state.rowReducer.tableData;