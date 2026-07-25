// src/app/router.tsx

import { createBrowserRouter } from 'react-router-dom';

import DashboardPage from '@/pages/DashboardPage';
import NotFoundPage from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardPage />,
        errorElement: <NotFoundPage />,
    },
]);
