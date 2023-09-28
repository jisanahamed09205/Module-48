import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import createMyRoute from './Route/Route'

export const GlobalContext = createContext(null)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createMyRoute}></RouterProvider>
  </React.StrictMode>,
)
