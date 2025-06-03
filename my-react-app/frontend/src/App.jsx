import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AllProductsPage from "./pages/AllProductsPage";
import CartPage from "./pages/CartPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/products/:category" element={<AllProductsPage />} />
        <Route path="/products/:category/:id" element={<AllProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    )
  );
  
  return <RouterProvider router={router} />;
};

export default App;
