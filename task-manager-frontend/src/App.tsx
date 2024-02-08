import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NoPage from './pages/NoPage';
import Profile from "./pages/Profile";
import {useEffect, useState} from "react";

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
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
