import { ChangeEvent, useState } from 'react';
import Button from '../../ui/Button/Button';
import TextInput from '../../ui/TextInput/TextInput';
import styles from './MainPage.module.css';
import { AuthCredentials, IUserMy } from '../../types/user';
import { useActions } from '../../hooks/useActions';

function MainPage() {
  const [isRegistration, setIsRegistration] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { createUser } = useActions();
  const { authenticateUser } = useActions();

  const newUser: IUserMy = {
    firstName,
    lastName,
    email,
    password,
  };

  const authCredentials: AuthCredentials = {
    email,
    password,
  };

  return (
    <div className={styles.container}>
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
          <Button
            text="Log in"
            onClick={() => authenticateUser(authCredentials)}
          />
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
          <Button
            text="Register"
            onClick={() => {
              createUser(newUser);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default MainPage;
