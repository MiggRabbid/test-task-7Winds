import { combineReducers, configureStore } from '@reduxjs/toolkit';


import rowReducer, { actions as rowActions } from './slices/row.slice';
import entityApi from './api/entity.api';

const rootReducer = combineReducers({
  rowReducer,
  [entityApi.reducerPath]: entityApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const actions = {
  ...rowActions,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(entityApi.middleware)
});


export { rootReducer, store, actions };

export type AppDispatch = typeof store.dispatch;