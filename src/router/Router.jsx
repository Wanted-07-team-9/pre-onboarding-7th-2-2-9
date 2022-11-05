import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import AdManager from '../pages/AdManager';
import Main from '../pages/Main';
import Layout from '../components/elements/layout/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main />} />
          <Route path="/ad" element={<AdManager />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
