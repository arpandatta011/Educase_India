import "./App.css";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center gap-2">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
