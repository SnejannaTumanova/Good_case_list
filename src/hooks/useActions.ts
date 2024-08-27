import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useMemo } from 'react';
import { ActionCreators } from '../store/action-creators/';

export const useActions = () => {
  const dispatch = useDispatch();
  // Закешировать результат bindActionCreators
  return useMemo(
    () => bindActionCreators(ActionCreators, dispatch),
    [dispatch]
  );
};
