import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import PasswordForget from './components/PasswordForget';
import Home from './components/Home';
import Account from './components/Account';
import Admin from './components/Admin';

import * as ROUTES from './constants/routes';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index path={ROUTES.LANDING} element={<Landing />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.PASSWORD_FORGET} element={<PasswordForget />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ACCOUNT} element={<Account />} />
        <Route path={ROUTES.ADMIN} element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default App;
