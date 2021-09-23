import asyncRouter from '@/utils/asyncRouter';

const Home = asyncRouter(() => import('./index'));

const TestRouter = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  }
];

export default TestRouter;
