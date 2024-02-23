import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NoPage from './pages/NoPage';
import Profile from "./pages/Profile";
import {useEffect, useState} from "react";
import {PAGES} from "./common/constants";
import {getUserInfo} from "./api/getUserInfo";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const initLogin = async () => {
      try {
        const name = await getUserInfo();
        setIsLogin(!!name); //convert to boolean
      } catch (e : any) {
        console.error(e);
      }
    };
    initLogin().then(r => console.log(r));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={PAGES.home} element={<Home />} />
        <Route path={PAGES.login} element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path={PAGES.register} element={<Register isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path={PAGES.profile}
               element={isLogin ? <Profile isLogin={isLogin} /> : <Navigate to={PAGES.login} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
