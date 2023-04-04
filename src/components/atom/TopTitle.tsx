import React, { ReactNode } from 'react';

interface TitleType {
  children: ReactNode;
}
const TopTitle = ({ children }: TitleType) => {
  return <div className={'flex w-full justify-between'}>{children}</div>;
};

export default TopTitle;
