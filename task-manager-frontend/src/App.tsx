import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NoPage from './pages/NoPage';
import Profile from "./pages/Profile";
import {useEffect, useState} from "react";
import {PAGES} from "./common/constants";
import {getUserInfo} from "./api/getUserInfo";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {useAppSelector} from "./hooks/useAppSelector";
import {fetchUser, selectUser} from "./redux/slices/authSlice";

export default function App() {
  console.log("App.tsx called");

  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const isLoggedIn = !!user;

  console.log(`App.tsx: user - ${user}`);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={PAGES.home} element={<Home />} />
        <Route path={PAGES.login} element={<Login isLoggedIn={isLoggedIn} />} />
        <Route path={PAGES.register} element={<Register isLoggedIn={isLoggedIn} />} />
        <Route path={PAGES.profile}
               element={isLoggedIn ? <Profile isLoggedIn={isLoggedIn} /> : <Navigate to={PAGES.login} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
