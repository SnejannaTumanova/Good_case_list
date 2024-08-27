import { ChangeEvent, useState } from 'react';
import { IUser } from '../types';
import Button from '../../ui/Button/Button';
import TextInput from '../../ui/TextInput/TextInput';
import styles from './MainPage.module.css';
import { useNavigate } from 'react-router-dom';
import UserList from '../../components/UserList';
import TodoList from '../../components/TodoList';

function MainPage() {
  const [isRegistration, setIsRegistration] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const newUser: IUser = {
    firstName,
    lastName,
    email,
    password,
  };

  return (
    <div className={styles.container}>
      <UserList />
      <TodoList />
      {isRegistration ? (
        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label />
            Email
            <label />
            <TextInput
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label />
            Password
            <label />
            <TextInput
              value={password}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
            />
          </div>
          <p
            onClick={() => setIsRegistration(!isRegistration)}
            className={styles.change}
          >
            Regist
          </p>
          <Button text="Log in" />
        </div>
      ) : (
        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label />
            FirstName
            <label />
            <TextInput
              value={firstName}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setFirstName(event.target.value)
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label />
            LastName
            <label />
            <TextInput
              value={lastName}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setLastName(event.target.value)
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label />
            Email
            <label />
            <TextInput
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label />
            Password
            <label />
            <TextInput
              value={password}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
            />
          </div>
          <p
            onClick={() => setIsRegistration(!isRegistration)}
            className={styles.change}
          >
            Log in
          </p>
          <Button text="Register" onClick={() => navigate('/user/:userId')} />
        </div>
      )}
    </div>
  );
}

export default MainPage;
