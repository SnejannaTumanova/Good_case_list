export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoProps {
  key: number;
  todo: ITodo;
}

export enum TodoActionType {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
  CREATE_TODO = 'CREATE_TODO',
  CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS',
  CREATE_TODO_ERROR = 'CREATE_TODO_ERROR',
  DELETE_TODO = 'DELETE_TODO',
  DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
  DELETE_TODO_ERROR = 'DELETE_TODO_ERROR',
  UPDATE_TODO = 'UPDATE_TODO',
  UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS',
  UPDATE_TODO_ERROR = 'UPDATE_TODO_ERROR',
}

interface FetchTodoAction {
  type: TodoActionType.FETCH_TODOS;
}

interface FetchTodoSuccessAction {
  type: TodoActionType.FETCH_TODOS_SUCCESS;
  payload: any[];
}

interface FetchTodoErrorAction {
  type: TodoActionType.FETCH_TODOS_ERROR;
  payload: string;
}

interface SetTodoPageAction {
  type: TodoActionType.SET_TODO_PAGE;
  payload: number;
}

interface CreateTodoAction {
  type: TodoActionType.CREATE_TODO;
}

interface CreateTodoSuccessAction {
  type: TodoActionType.CREATE_TODO_SUCCESS;
  payload: ITodo;
}

interface CreateTodoErrorAction {
  type: TodoActionType.CREATE_TODO_ERROR;
  payload: string;
}

interface DeleteTodoAction {
  type: TodoActionType.DELETE_TODO;
}

interface DeleteTodoSuccessAction {
  type: TodoActionType.DELETE_TODO_SUCCESS;
  payload: number; // todoId кейса
}

interface DeleteTodoErrorAction {
  type: TodoActionType.DELETE_TODO_ERROR;
  payload: string;
}

interface UpdateTodoAction {
  type: TodoActionType.UPDATE_TODO;
}

interface UpdateTodoSuccessAction {
  type: TodoActionType.UPDATE_TODO_SUCCESS;
  payload: ITodo;
}

interface UpdateTodoErrorAction {
  type: TodoActionType.UPDATE_TODO_ERROR;
  payload: string;
}

export type TodoAction =
  | FetchTodoAction
  | FetchTodoSuccessAction
  | FetchTodoErrorAction
  | SetTodoPageAction
  | CreateTodoAction
  | CreateTodoSuccessAction
  | CreateTodoErrorAction
  | DeleteTodoAction
  | DeleteTodoSuccessAction
  | DeleteTodoErrorAction
  | UpdateTodoAction
  | UpdateTodoSuccessAction
  | UpdateTodoErrorAction;
