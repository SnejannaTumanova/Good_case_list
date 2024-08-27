import { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTapedSelector';
import { useActions } from '../../hooks/useActions';
import UserItem from '../UserItem/UserItem';
import styles from './UserList.module.css';

function UserList() {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={styles.friends}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
export default UserList;
