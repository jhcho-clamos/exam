import { createBrowserRouter } from 'react-router-dom';
import GlobalContainer from '../components/block/GlobalContainer';
import Login from '../page/login/Login';
import Main from '../page/main/Main';
import Video from '../page/video/Video';

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
        path: 'video',
        element: <Video />,
      },
      {
        path: '',
        element: <Main />,
      },
    ],
  },
]);

export default router;
