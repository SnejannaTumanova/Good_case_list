import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTapedSelector';
import { useActions } from '../hooks/useActions';

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
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{ display: 'flex' }}>
        {pages.map((p) => (
          <div
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? '10px double green' : '2px solid blue',
              padding: 10,
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
