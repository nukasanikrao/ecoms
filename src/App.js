import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ItemDetails from "./Pages/ItemDetails";
import PageNotFound from "./Pages/PageNotFound";
import PageLayout from "./Pages/PageLayout";
function App() {
  return (
    <BrowserRouter>
      <PageLayout />
      <Routes>
        <Route path="/" element={<PageLayout />} />
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
