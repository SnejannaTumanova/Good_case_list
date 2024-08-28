export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

// Мой вид user
export interface IUserMy {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  id?: number;
}

//Моковый user
export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: object;
  phone: string;
  website: string;
  company: object;
}

export interface IUserProps {
  key: number;
  user: IUser;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export enum UserActionType {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
  CREATE_USER = 'CREATE_USER',
  CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS',
  CREATE_USER_ERROR = 'CREATE_USER_ERROR',
  DELETE_USER = 'DELETE_USER',
  DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
  DELETE_USER_ERROR = 'DELETE_USER_ERROR',
  UPDATE_USER = 'UPDATE_USER',
  UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
  UPDATE_USER_ERROR = 'UPDATE_USER_ERROR',
  AUTHENTICATE_USER = 'AUTHENTICATE_USER',
  AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS',
  AUTHENTICATE_USER_ERROR = 'AUTHENTICATE_USER_ERROR',
}

interface FetchUsersAction {
  type: UserActionType.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  type: UserActionType.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUsersErrorAction {
  type: UserActionType.FETCH_USERS_ERROR;
  payload: string;
}

interface FetchUserAction {
  type: UserActionType.FETCH_USER;
}

interface FetchUserSuccessAction {
  type: UserActionType.FETCH_USER_SUCCESS;
  payload: IUserMy;
}

interface FetchUserErrorAction {
  type: UserActionType.FETCH_USER_ERROR;
  payload: string;
}

interface CreateUserAction {
  type: UserActionType.CREATE_USER;
}

interface CreateUserSuccessAction {
  type: UserActionType.CREATE_USER_SUCCESS;
  payload: IUserMy;
}

interface CreateUserErrorAction {
  type: UserActionType.CREATE_USER_ERROR;
  payload: string;
}

interface DeleteUserAction {
  type: UserActionType.DELETE_USER;
}

interface DeleteUserSuccessAction {
  type: UserActionType.DELETE_USER_SUCCESS;
  payload: number; // userId удаленного пользователя
}

interface DeleteUserErrorAction {
  type: UserActionType.DELETE_USER_ERROR;
  payload: string;
}

interface UpdateUserAction {
  type: UserActionType.UPDATE_USER;
}

interface UpdateUserSuccessAction {
  type: UserActionType.UPDATE_USER_SUCCESS;
  payload: IUserMy;
}

interface UpdateUserErrorAction {
  type: UserActionType.UPDATE_USER_ERROR;
  payload: string;
}

interface AuthenticateUserAction {
  type: UserActionType.AUTHENTICATE_USER;
}

interface AuthenticateUserSuccessAction {
  type: UserActionType.AUTHENTICATE_USER_SUCCESS;
  payload: {
    token: string; // Обычно сервер возвращает токен
    user: IUserMy;
  };
}

interface AuthenticateUserErrorAction {
  type: UserActionType.AUTHENTICATE_USER_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction
  | FetchUserAction
  | FetchUserSuccessAction
  | FetchUserErrorAction
  | CreateUserAction
  | CreateUserSuccessAction
  | CreateUserErrorAction
  | DeleteUserAction
  | DeleteUserSuccessAction
  | DeleteUserErrorAction
  | UpdateUserAction
  | UpdateUserSuccessAction
  | UpdateUserErrorAction
  | AuthenticateUserAction
  | AuthenticateUserSuccessAction
  | AuthenticateUserErrorAction;
