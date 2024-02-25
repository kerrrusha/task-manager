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
import Loading from "./components/Loading";

export default function App() {
  const dispatch = useAppDispatch();
  const [loggedIn, setLoggedIn] = useState<any>(undefined);
  const [loggedInFetched, setLoggedInFetched] = useState<boolean>(false);

  useEffect(() => {
    const initLogin = async () => {
      setLoggedIn(await isLoggedIn());
      setLoggedInFetched(true);
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
  }, [loggedInFetched]);

  const loading = <Loading />;

  const router = <BrowserRouter>
    <Routes>
      <Route index
             element={loggedIn ? <Home /> : <Navigate to={PAGES.login} />} />
      <Route path={PAGES.home}
             element={loggedIn ? <Home /> : <Navigate to={PAGES.login} />} />
      <Route path={PAGES.profile}
             element={loggedIn ? <Profile /> : <Navigate to={PAGES.login} />} />
      <Route path={PAGES.login} element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
      <Route path={PAGES.register} element={<Register />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>;

  console.log(`loggedInFetched: ${loggedInFetched}`);
  console.log(`loggedIn: ${loggedIn}`);
  return loggedInFetched ? router : loading;
}
