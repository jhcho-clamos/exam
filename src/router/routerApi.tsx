import { createBrowserRouter } from 'react-router-dom';
import GlobalContainer from '../components/block/GlobalContainer';
import Login from '../page/login/Login';
import Main from '../page/main/Main';

const router = createBrowserRouter([
  {
    path: '*',
    element: <GlobalContainer />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '',
        element: <Main />,
      },
    ],
  },
]);

export default router;
