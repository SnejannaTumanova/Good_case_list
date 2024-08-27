import { Dispatch } from 'redux';
import { UserAction, UserActionType } from '../../types/user';
import axios from 'axios';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionType.FETCH_USERS });
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setTimeout(() => {
        dispatch({
          type: UserActionType.FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      }, 2000);
    } catch (e) {
      dispatch({
        type: UserActionType.FETCH_USERS_ERROR,
        payload: `Error: Something didn't go according to plan`,
      });
    }
  };
};
