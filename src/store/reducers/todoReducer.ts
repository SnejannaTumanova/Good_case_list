import { TodoAction, TodoActionType, TodoState } from '../../types/todo';

const initialState: TodoState = {
  todos: [],
  page: 1,
  limit: 10,
  error: null,
  loading: false,
};

export const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionType.FETCH_TODOS:
      return { ...state, loading: true };

    case TodoActionType.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };

    case TodoActionType.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };

    case TodoActionType.SET_TODO_PAGE:
      return { ...state, page: action.payload };

    case TodoActionType.CREATE_TODO:
      return { ...state, loading: true };

    case TodoActionType.CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload],
      };

    case TodoActionType.CREATE_TODO_ERROR:
      return { ...state, loading: false, error: action.payload };

    case TodoActionType.DELETE_TODO:
      return { ...state, loading: true };

    case TodoActionType.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TodoActionType.DELETE_TODO_ERROR:
      return { ...state, loading: false, error: action.payload };

    case TodoActionType.UPDATE_TODO:
      return { ...state, loading: true };

    case TodoActionType.UPDATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    case TodoActionType.UPDATE_TODO_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
