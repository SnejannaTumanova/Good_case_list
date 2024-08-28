import styles from './UserPage.module.css';
import { MdOutlineExitToApp } from 'react-icons/md';
import { RiEdit2Line } from 'react-icons/ri';
import Button from '../../ui/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import UserList from '../../components/UserList/UserList';
import TodoList from '../../components/TodoList/TodoList';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { fetchUser } from '../../store/action-creators/user';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTapedSelector';
import { IUserMy } from '../../types/user';
import { useDispatch } from 'react-redux';

function UserPage(): any {
  const { fetchUser } = useActions();
  const { userId } = useParams<{ userId: string }>(); // если используете react-router для получения userId из URL
  const [user, setUser] = useState<IUserMy | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await dispatch(fetchUser(Number(userId)) as any);
        setUser(response);
        setLoading(false);
      } catch (error) {
        setError(`Error: Something didn't go according to plan`);
        setLoading(false);
      }
    };

    getUser();
  }, [userId, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      <div className={styles.conteiner}>
        <div className={styles.header}>
          <RiEdit2Line />
          <MdOutlineExitToApp onClick={() => navigate('/')} />
        </div>
        {user ? `${user.firstName} ${user.lastName}` : 'Loading...'}
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
