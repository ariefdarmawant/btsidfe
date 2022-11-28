import "./index.css";
import { useEffect, useState } from "react";
import AuthService from "./services/auth.service";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Feeds from "./pages/Feeds";
import JwtService from "./services/jwt.service";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = JwtService.getUser();
    if (user) {
      setCurrentUser(user);
      navigate("/feeds");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/feeds" element={<Feeds />} />
      </Routes>
    </div>
  );
}

export default App;
