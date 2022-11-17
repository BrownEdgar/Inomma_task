import React, { useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import ROUTES from '../Routes'
const PrivateRoutes = () => {
  const [isLogin] = useState(!!window.localStorage.getItem("login"))

  return (
    isLogin ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />
  )
}

export default PrivateRoutes