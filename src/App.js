import React from 'react';
import MainLayaut from './components/Layaut/MainLayaut';

import { Routes, Route } from 'react-router-dom'
import { Home } from './components/client'

import { AllProducts } from './components/admin';
import { AddProducts } from './components/admin';
import ROUTES from './components/Routes';
import PrivateRoutes from './components/utils/PrivateRoutes';
import Login from './components/auth/Login';


function App() {
  return (
    <MainLayaut>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={ROUTES.ALL_PRODUCT} element={<AllProducts />} />
          <Route path={ROUTES.ADD_PRODUCT} element={<AddProducts />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SHOP} element={<Home />} />
      </Routes>
    </MainLayaut>
  );
}

export default App;
