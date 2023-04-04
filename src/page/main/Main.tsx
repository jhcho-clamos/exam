import React from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userSelector } from '../../global/recoil';
import { Text } from '../../styles/font';
import TopTitle from '../../components/atom/TopTitle';
import ActionButton from '../../components/block/ActionButton';
import { useQuery } from '@tanstack/react-query';
import queryKey from '../../global/queryKey';
import Api from '../../config/api';
import ListTable from '../../components/block/ListTable';

const Main = () => {
  const resetUserData = useResetRecoilState(userSelector);
  const userData = useRecoilValue(userSelector);
  const {
    data: todoList,
    isLoading,
    isFetching,
  } = useQuery(
    [queryKey.todoList, userData.userId],
    ({ queryKey }) => Api.getTodoList(queryKey[1]),
    {
      refetchOnWindowFocus: false,
    }
  );
  return (
    <div className={'w-full h-full overflow-hidden'}>
      <TopTitle>
        <div className={'border-b-4 border-b-white pr-4'}>
          <Text size={'2rem'}>Todo List</Text>
        </div>
        <ActionButton
          fontSize={'1.5rem'}
          padding={'0 1rem'}
          text={'Add'}
          textColor={'black'}
          width={'120px'}
        />
      </TopTitle>
      <ListTable data={todoList?.data?.data} />
    </div>
  );
};

export default Main;
