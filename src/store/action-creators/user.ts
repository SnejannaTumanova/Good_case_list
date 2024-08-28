import { Dispatch } from 'redux';
import {
  AuthCredentials,
  IUserMy,
  UserAction,
  UserActionType,
} from '../../types/user';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

// для получения списка друзей
export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionType.FETCH_USERS });

      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      dispatch({
        type: UserActionType.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionType.FETCH_USERS_ERROR,
        payload: `Error: Something didn't go according to plan`,
      });
    }
  };
};

// для получения данных пользователя и отрисовки на странице UserPage
export function fetchUser(userId: number) {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionType.FETCH_USER });

      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      dispatch({
        type: UserActionType.FETCH_USER_SUCCESS,
        payload: response.data,
      });
      return response.data;
    } catch (e) {
      dispatch({
        type: UserActionType.FETCH_USER_ERROR,
        payload: `Error: Something didn't go according to plan`,
      });
    }
  };
}

export function createUser({ firstName, lastName, email, password }: IUserMy) {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionType.CREATE_USER });

      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      dispatch({
        type: UserActionType.CREATE_USER_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        navigate(`/user/${response.data.id}`); //'/user/userId'
      }
    } catch (e) {
      dispatch({
        type: UserActionType.CREATE_USER_ERROR,
        payload: `Error: Something didn't go according to plan`,
      });
    }
  };
}

export function deleteUser(userId: number) {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionType.DELETE_USER });

      await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      dispatch({
        type: UserActionType.DELETE_USER_SUCCESS,
        payload: userId,
      });
    } catch (e) {
      dispatch({
        type: UserActionType.DELETE_USER_ERROR,
        payload: `Error: Something didn't go according to plan`,
      });
    }
  };
}

export function updateUser(user: IUserMy) {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionType.UPDATE_USER });

      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        user
      );

      dispatch({
        type: UserActionType.UPDATE_USER_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionType.UPDATE_USER_ERROR,
        payload: `Error: Something didn't go according to plan`,
      });
    }
  };
}

export function authenticateUser({ email, password }: AuthCredentials) {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionType.AUTHENTICATE_USER });

      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users/auth',
        {
          email,
          password,
        }
      );

      dispatch({
        type: UserActionType.AUTHENTICATE_USER_SUCCESS,
        payload: response.data, // Это  токен или информация о пользователе, пока не знаю как обработать
      });
    } catch (e) {
      dispatch({
        type: UserActionType.AUTHENTICATE_USER_ERROR,
        payload: 'Authentication failed',
      });
    }
  };
}
