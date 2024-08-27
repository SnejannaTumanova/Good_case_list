import * as userActionCreators from './user';
import * as todoActionCreators from './todo';

export const ActionCreators = {
  ...userActionCreators,
  ...todoActionCreators,
};
