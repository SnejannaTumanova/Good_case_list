import { Dispatch } from 'redux';
import axios from 'axios';
import { ITodo, TodoAction, TodoActionType } from '../../types/todo';
import { title } from 'process';

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

export function createTodo({ completed, title, userId }: ITodo) {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionType.CREATE_TODO });

      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        {
          completed, // по умолчанию false
          title,
          userId,
        }
      );

      dispatch({
        type: TodoActionType.CREATE_TODO_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TodoActionType.CREATE_TODO_ERROR,
        payload: `Error: Something didn't go according to plan`,
      });
    }
  };
}

export function deleteUser(todoId: number) {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionType.DELETE_TODO });

      await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
      );

      dispatch({
        type: TodoActionType.DELETE_TODO_SUCCESS,
        payload: todoId,
      });
    } catch (e) {
      dispatch({
        type: TodoActionType.DELETE_TODO_ERROR,
        payload: `Error: Something didn't go according to plan`,
      });
    }
  };
}

export function updateUser(todo: ITodo) {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionType.UPDATE_TODO });

      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        todo
      );

      dispatch({
        type: TodoActionType.UPDATE_TODO_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TodoActionType.UPDATE_TODO_ERROR,
        payload: `Error: Something didn't go according to plan`,
      });
    }
  };
}
