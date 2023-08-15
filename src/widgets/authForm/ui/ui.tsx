'use client';
import { useEffect, useState, MouseEvent } from 'react';
import styles from './ui.module.scss';
import { Gapped } from '@/shared/gapped/ui/ui';
import { InverseAfishaLogo } from '@/shared/inverseLogo';
import { AuthInput } from '@/entities/inputs/authInput';
import { MainButton } from '@/entities/buttons/mainButton';
import Link from 'next/link';
import { TextInput } from '@/entities/inputs/textInput';
import { Post } from '../module';
import { useRouter } from 'next/navigation';

export const LoginForm = () => {
  const [inputMailValue, setInputMailValue] = useState<string>('');
  const [inputPasswordValue, setInputPasswordValue] = useState<string>('');
  const [errorPasswordMessage, setErrorPasswordMessage] = useState<string>('notError');
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setInputMailValue('');
    setInputPasswordValue('');
  }, []);
  useEffect(() => {
    if (inputMailValue.length !== 0 && inputPasswordValue.length !== 0) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [inputMailValue.length, inputPasswordValue.length]);

  const AuthHandleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const res: any = await Post({ mail: inputMailValue, password: inputPasswordValue });
      if (res && res.auth_token) {
        router.push('/admin');
      }
    } catch (error) {
      alert('Введены неверные данные');
    }
  };

  return (
    <>
      <Gapped className={styles.screen}>
        <Gapped vertical verticalAlign="middle" gap="64px" className={styles.cardWrap}>
          <Gapped gap="16px" vertical verticalAlign="middle" className={styles.inputWrap}>
            <InverseAfishaLogo />

            <TextInput
              inputPlaceholder="Почта"
              inputId="Почта"
              inputName="Почта"
              inputValue={inputMailValue}
              setText={setInputMailValue}
            />
            <AuthInput
              password={true}
              passwordSignInMode={true}
              mail={false}
              number={false}
              inputName={''}
              placeholder="Пароль"
              eye={true}
              text={inputPasswordValue}
              setText={setInputPasswordValue}
              errorMessage={errorPasswordMessage}
              setErrorMessage={setErrorPasswordMessage}
            />
            <MainButton
              bgColor="#7AAC5C"
              textColor="white"
              isActive={isButtonDisabled}
              onClick={() => AuthHandleClick}
              width="fit-content"
              height="fit-content">
              Войти
            </MainButton>

            <span className={styles.helpText}>
              Входя в систему, вы принимаете{' '}
              <Link className={styles.terms} href="">
                пользовательское соглашение
              </Link>
            </span>
          </Gapped>
        </Gapped>
      </Gapped>
    </>
  );
};
