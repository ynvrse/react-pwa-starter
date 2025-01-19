import { createBrowserRouter } from 'react-router-dom';

import { Applayout } from './components/layouts/AppLayout';

import NoMatch from './pages/404';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';
import Favorite from './pages/Favorite';
import Profile from './pages/Profile';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Applayout />,
            children: [
                {
                    path: '',
                    element: <Dashboard />,
                },
                {
                    path: 'explore',
                    element: <Explore />,
                },
                {
                    path: 'favorites',
                    element: <Favorite />,
                },
                {
                    path: 'profile',
                    element: <Profile />,
                },
            ],
        },
        {
            path: '*',
            element: <NoMatch />,
        },
    ],
    {
        basename: global.basename,
    },
);
