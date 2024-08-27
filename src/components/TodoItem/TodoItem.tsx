import { useEffect, useState } from 'react';
import { ITodoProps } from '../../types/todo';
import { VscCheckAll } from 'react-icons/vsc';
import { VscPinned } from 'react-icons/vsc';
import styles from './TodoItem.module.css';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { RiEdit2Line } from 'react-icons/ri';

function TodoItem({ todo }: ITodoProps) {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => setIsCompleted(todo.completed), []);

  return (
    <div className={styles.container}>
      <div className={styles.number}>
        <div>{todo.id}</div>
        {isCompleted ? (
          <div className={styles.completed}>
            <VscCheckAll />
          </div>
        ) : (
          <div className={styles.completed}>
            <VscPinned />
          </div>
        )}
      </div>
      <div className={styles.title}>{todo.title}</div>
      <div className={styles.icons}>
        <RiDeleteBin2Line size={24} />
        <RiEdit2Line />
      </div>
    </div>
  );
}

export default TodoItem;
