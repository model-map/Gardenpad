import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import { ThemeProvider } from "./lib/theme-provider";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
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
      {children}
    </ThemeProvider>
  );
}
