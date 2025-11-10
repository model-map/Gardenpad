import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";

export default function App() {
  return (
    <BrowserRouter>
      {/* 
    gardenpad.com/home
    gardenpad.com/products
    gardenpad.com/cart
    */}
      <Routes>
        {/* USER LAYOUT */}
        <Route path="/" element={<UserLayout />}></Route>
        {/* ADMIN LAYOUT */}
      </Routes>
    </BrowserRouter>
  );
}
