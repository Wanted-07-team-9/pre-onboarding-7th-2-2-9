import React from 'react';
import { BrowserRouter, Navigate, Route, Routes, To } from 'react-router-dom';
import Layout from '../components/common/Layout';
import NotFound from '../pages/NotFound';
import AdManager from '../pages/AdManager';
import Main from '../pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Redirect to="/main" />} />
          <Route path="/main" element={<Main />} />
          <Route path="/ad" element={<AdManager />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const Redirect = ({ to }) => <Navigate to={to} />;

export default Router;
