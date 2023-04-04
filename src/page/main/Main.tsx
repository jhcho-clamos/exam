import React from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userSelector } from '../../global/recoil';
import { Text } from '../../styles/font';

const Main = () => {
  const resetUserData = useResetRecoilState(userSelector);
  const userData = useRecoilValue(userSelector);
  return (
    <div className={'flex flex-col text-center'}>
      <Text size={'2rem'}>{userData.userName}</Text>
      <Text size={'2rem'}>{userData.userId}</Text>
      <Text
        className={'cursor-pointer'}
        size={'2rem'}
        onClick={() => {
          resetUserData();
          window.location.href = '/login';
        }}
      >
        logOut
      </Text>
    </div>
  );
};

export default Main;
