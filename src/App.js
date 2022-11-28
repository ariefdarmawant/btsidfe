import "./index.css";
import { useEffect, useState } from "react";
import AuthService from "./services/auth.service";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import JwtService from "./services/jwt.service";
import ChecklistItem from "./pages/ChecklistItems";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = JwtService.getUser();
    if (!user) {
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
        <Route exact path="/checklist" element={<Home />} />
        <Route path="/checklist/:id" element={<ChecklistItem />} />
      </Routes>
    </div>
  );
}

export default App;
