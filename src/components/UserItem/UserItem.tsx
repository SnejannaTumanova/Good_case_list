import { IUserProps } from '../../types/user';
import styles from './UserItem.module.css';

function UserItem({ user }: IUserProps) {
  const nikname = `(${user.username})`;
  return (
    <div className={styles.friend}>
      {user.name}
      {nikname}
    </div>
  );
}

export default UserItem;
