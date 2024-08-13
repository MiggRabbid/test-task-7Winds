import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../app/store/index';

const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};

export default useActions;