import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NoPage from './pages/NoPage';
import Profile from "./pages/Profile";
import {useEffect, useState} from "react";
import {GoogleOAuthProvider} from "@react-oauth/google";

const data = {
  userId: "asd",
}

export default function App() {
  const [userId] = useState<string | undefined>(data.userId);

  useEffect(() => {
    if (userId === undefined && !['/signin', '/signup'].includes(window.location.pathname)) {
      window.location.href = '/signin';
    }
  }, [userId]);

  return (
      <GoogleOAuthProvider clientId={"857347797520-ca56rug79hdelb4ar8pdqmjtoc6v07jb.apps.googleusercontent.com"}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
  );
}
