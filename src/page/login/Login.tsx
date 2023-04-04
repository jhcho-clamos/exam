import React, { useEffect, useRef, useState } from 'react';
import { Text } from '../../styles/font';
import ActionButton from '../../components/block/ActionButton';
import { useMutation } from '@tanstack/react-query';
import Api from '../../config/api';
import { useRecoilState } from 'recoil';
import { userSelector } from '../../global/recoil';
import { userType } from '../../types/user';
import { useNavigate } from 'react-router-dom';

interface userLogintype {
  userId: string;
}

const Login = () => {
  const [userData, setUserData] = useState<userLogintype>({
    userId: '',
  });
  const [erMessage, setErMessage] = useState<string>('');
  const [user, setUser] = useRecoilState(userSelector);
  const idRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { mutate: loginMutate } = useMutation(
    (data: Object) => Api.userLogin(data),
    {
      onSuccess: (data) => {
        setUser({ ...data?.data?.data, isLogin: true });
        navigate('/');
      },
      onError: (data: any) => {
        setErMessage(data?.response?.data?.data.toString());
      },
    }
  );

  useEffect(() => {
    if (idRef.current) {
      idRef.current.focus();
    }
  }, []);

  const changeValue = (e: HTMLInputElement) => {
    setUserData({
      userId: e.value,
    });
  };

  const keyDownEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toString().toLowerCase() == 'enter') {
      loginMutate(userData);
    }
  };

  return (
    <div className={'h-3/6 w-1/3 flex flex-col justify-between'}>
      <div className={'w-full flex flex-col'}>
        <Text margin={'0 0 4rem 0'} size={'2rem'} bold={true}>
          Login
        </Text>
        <Text margin={'0 0 2.2rem 0'} bold={true}>
          ID
        </Text>
        <input
          ref={idRef}
          onKeyDown={keyDownEvent}
          name={'userId'}
          type={'text'}
          onChange={(e) => changeValue(e.target)}
          className={
            'border-b-2 border-b-white outline-none bg-transparent text-white pb-2 mb-10'
          }
        />
        <Text color={'white'}>{erMessage}</Text>
      </div>
      <ActionButton
        text={'SIGN IN'}
        textColor={'black'}
        action={() => loginMutate(userData)}
      />
    </div>
  );
};

export default Login;
