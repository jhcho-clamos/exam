import { atom, atomFamily, DefaultValue, selector } from 'recoil';
import { userType } from '../types/user';
import { recoilPersist } from 'recoil-persist';

// type userId = string;
// const user = atomFamily<userType, userId>({
//   key: 'todoItem',
//   default: (id) => ({
//     id,
//     name: '',
//     age: 0,
//     userId: '',
//   }),
// });

const { persistAtom } = recoilPersist();

const user = atom<userType>({
  key: 'todoItem',
  default: {
    userName: '',
    userId: '',
    isLogin: false,
  },
  effects_UNSTABLE: [persistAtom],
});

const userSelector = selector<userType>({
  key: 'userChangeState',
  get: ({ get }) => get(user),
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(user);
    } else {
      set(user, newValue);
    }
  },
});

export { userSelector };
