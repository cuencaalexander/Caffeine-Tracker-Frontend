import React from "react";
import Home from "./Home";
import PostDrink from "./PostDrink";
import UserDrinks from "./UserDrinks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./SideBar";
import Users from "./Users";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post_drink" element={<PostDrink />} />
        <Route path="users" element={<Users />} />
        <Route path="user_drinks/:username" element={<UserDrinks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
