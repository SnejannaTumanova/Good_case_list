import { IUserMy, UserAction, UserActionType } from '../../types/user';

interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}
const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.FETCH_USERS:
      return { loading: true, error: null, users: [] };

    case UserActionType.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };

    case UserActionType.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };

    case UserActionType.FETCH_USER:
      return { ...state, loading: true, error: null };

    case UserActionType.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    case UserActionType.FETCH_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    case UserActionType.CREATE_USER:
      return { ...state, loading: true, error: null };

    case UserActionType.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
      };

    case UserActionType.CREATE_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    case UserActionType.DELETE_USER:
      return { ...state, loading: true, error: null };

    case UserActionType.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case UserActionType.DELETE_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    case UserActionType.UPDATE_USER:
      return { ...state, loading: true, error: null };

    case UserActionType.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case UserActionType.UPDATE_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    case UserActionType.AUTHENTICATE_USER:
      return { ...state, loading: true, error: null };

    case UserActionType.AUTHENTICATE_USER_SUCCESS:
      return { ...state, loading: false }; //пока не поняла нужно ли менять что-то ещё

    case UserActionType.AUTHENTICATE_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
