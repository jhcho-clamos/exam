import React from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userSelector } from '../../global/recoil';
import { Text } from '../../styles/font';
import TopTitle from '../../components/atom/TopTitle';
import ActionButton from '../../components/block/ActionButton';
import { useQuery, useQueryClient } from '@tanstack/react-query';
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

  const queryClient = useQueryClient();

  const deleteHandle = async () => {
    await queryClient.invalidateQueries([queryKey.todoList]);
  };

  return (
    <div className={'w-full h-full overflow-hidden'}>
      <TopTitle>
        <div className={'border-b-4 border-b-white pr-4'}>
          <Text size={'2rem'}>Todo List</Text>
        </div>
        <ActionButton
          fontSize={'1.5rem'}
          padding={'0 1rem'}
          text={'Delete'}
          textColor={'black'}
          width={'120px'}
          action={deleteHandle}
        />
      </TopTitle>
      <div className={'flex flex-row mt-10 items-center'}>
        <img alt={'err'} src={require('../../assets/img/list.svg').default} />
        <Text size={'1.5rem'}>my to-do list</Text>
      </div>
      <ListTable data={todoList?.data?.data} />
    </div>
  );
};

export default Main;
