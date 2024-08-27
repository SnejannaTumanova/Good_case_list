import { UserAction, UserActionType } from '../../types/user';

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
    default:
      return state;
  }
};
