import { createBrowserRouter } from 'react-router-dom'
import Index from '../pages/index'
import Testing from '../pages/index'
import Countries from '../pages/countries'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/testing',
        element: <Testing />,
    },
    {
        path: '/countries',
        element: <Countries />,
    },
])
