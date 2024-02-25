import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NoPage from './pages/NoPage';
import Profile from "./pages/Profile";
import {useEffect, useState} from "react";
import {PAGES} from "./common/constants";
import {getUserInfo} from "./services/getUserInfo";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {setUser} from "./redux/slices/authSlice";
import {isLoggedIn} from "./services/isLoggedIn";

export default function App() {
  const dispatch = useAppDispatch();
  const [loggedIn, setLoggedIn] = useState<any>(undefined);

  useEffect(() => {
    const initLogin = async () => {
      setLoggedIn(await isLoggedIn());
      console.log(`Logged in: ${loggedIn}`);
    };
    initLogin();

    if (!loggedIn) {
      return;
    }

    getUserInfo().then(user => {
      console.log(`Logged user:`);
      console.log(user);

      dispatch(setUser(user));
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index
               element={loggedIn ? <Home /> : <Navigate to={PAGES.login} />} />
        <Route path={PAGES.home}
               element={loggedIn ? <Home /> : <Navigate to={PAGES.login} />} />
        <Route path={PAGES.profile}
               element={loggedIn ? <Profile /> : <Navigate to={PAGES.login} />} />
        <Route path={PAGES.login} element={<Login loggedIn={loggedIn} />} />
        <Route path={PAGES.register} element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
