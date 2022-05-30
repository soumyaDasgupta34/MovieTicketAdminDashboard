import React from "react";
import HomeContainer from "./components/HomeContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
