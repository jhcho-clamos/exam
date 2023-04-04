import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userSelector } from '../../global/recoil';

const GlobalContainer = () => {
  const getUserData = useRecoilValue(userSelector);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!getUserData.isLogin) {
      navigate('/login');
    } else {
      if (location.pathname.toString() == '/login') {
        navigate('/');
      }
    }
  }, []);
  return (
    <div
      className={'bg-black flex justify-center items-center w-full h-full p-10'}
    >
      <Outlet />
    </div>
  );
};

export default GlobalContainer;
