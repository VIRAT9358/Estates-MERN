import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
