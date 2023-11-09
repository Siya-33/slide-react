import { createHashRouter } from 'react-router-dom'
import { lazy } from 'react'
import App from './App'

const Page1 = lazy(() => import('./pages/page1'))
const Page2 = lazy(() => import('./pages/page2'))

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'page1',
        element: <Page1 />,
      },
      {
        path: 'page2',
        element: <Page2 />,
      },
    ],
  },
])
