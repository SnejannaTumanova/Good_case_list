import { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTapedSelector';
import { useActions } from '../../hooks/useActions';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

function TodoList() {
  const { error, limit, loading, page, todos } = useTypedSelector(
    (store) => store.todo
  );
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <div className={styles.pages}>
        {pages.map((p) => (
          <div
            className={styles.page}
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? '6px double white' : '1px solid black',
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
