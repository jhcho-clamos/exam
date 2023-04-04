import React from 'react';
import { Text } from '../../styles/font';

interface listType {
  data?: object[];
}
const ListTable = ({ data }: listType) => {
  return (
    <div className={'w-full h-5/6 max-h-screen overflow-auto mt-20'}>
      {data?.map((r: any, index: number) => (
        <div
          key={`listkey${index}`}
          className={
            'w-full bg-neutral-800 flex justify-between items-center px-3 py-5 mb-5'
          }
        >
          <div className={'flex flex-row items-center justify-center'}>
            <img
              alt={'err'}
              src={
                require(r?.state
                  ? '../../assets/img/check.svg'
                  : '../../assets/img/x.svg').default
              }
              width={20}
              className={'mr-3'}
            />
            <Text size={'1.3rem'}>{r?.content}</Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTable;
