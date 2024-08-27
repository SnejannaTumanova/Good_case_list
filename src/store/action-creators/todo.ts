import { Dispatch } from 'redux';
import axios from 'axios';
import { TodoAction, TodoActionType } from '../../types/todo';

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionType.FETCH_TODOS });
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        { params: { _page: page, _limit: limit } }
      );
      dispatch({
        type: TodoActionType.FETCH_TODOS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TodoActionType.FETCH_TODOS_ERROR,
        payload: `Error: Something didn't go according to plan`,
      });
    }
  };
};

export function setTodoPage(page: number): TodoAction {
  return { type: TodoActionType.SET_TODO_PAGE, payload: page };
}
