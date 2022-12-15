import ReactDOM from 'react-dom/client';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import {Example,routes} from './components/example'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Example/>,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);