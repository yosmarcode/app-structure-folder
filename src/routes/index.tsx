import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './PrivateRouters'

const AppRouter = () => {
  return (
    <RouterProvider router={router} fallbackElement={<h4>Obteniendo información ....</h4>} />
  )
}

export default AppRouter