import styles from './UserPage.module.css';
import { MdOutlineExitToApp } from 'react-icons/md';
import { RiEdit2Line } from 'react-icons/ri';
import Button from '../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import UserList from '../../components/UserList/UserList';
import TodoList from '../../components/TodoList/TodoList';
import { RiDeleteBin2Line } from 'react-icons/ri';

function UserPage(): any {
  const user = {
    firstName: 'Ruslan',
    lastName: 'Tumanov',
  };
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      <div className={styles.conteiner}>
        <div className={styles.header}>
          <RiEdit2Line />
          <MdOutlineExitToApp onClick={() => navigate('/')} />
        </div>
        <h3 className={styles.name}>
          {user.firstName}
          {user.lastName}
        </h3>
        <img src="/avatarka-65.png" alt="avatar" className={styles.avatar} />
        <div>
          <Button text="Add a case" />
        </div>
        <div>
          <Button text="Add a friend" />
        </div>
        <UserList />
        <RiDeleteBin2Line />
      </div>
      <TodoList />
    </div>
  );
}

export default UserPage;
