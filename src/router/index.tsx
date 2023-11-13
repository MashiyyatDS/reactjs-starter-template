import { createBrowserRouter } from 'react-router-dom'
import Index from '../pages/index'
import Testing from '../pages/index'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/testing',
        element: <Testing />,
    },
])
