import { FC } from "react";
import { HomePage } from "../pages/homePage/HomePage";
import { ProductPage } from "../pages/productPage/ProductPage";
import { AboutPage } from "../pages/aboutPage/AboutPage";
import { Route, Routes } from "react-router-dom";
import { AllProductPage } from "../pages/allProductPage/AllProductPage";
import { ShoppingBasketPage } from "../pages/shoppingBasketPage/ShoppingBasketPage";
import "./styles/font.css";
import "./styles/reset.css"
import { StaticRoutes } from "./app";

export const Router: FC = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path={StaticRoutes.Home} element={<HomePage />}></Route>
        <Route path={StaticRoutes.Product}element={<ProductPage/>}></Route>
        <Route path={StaticRoutes.About}element={<AboutPage/>}></Route>
        <Route path={StaticRoutes.All}element={<AllProductPage/>}></Route>
        <Route path={StaticRoutes.ShopBasket}element={<ShoppingBasketPage/>}></Route>
      </Routes>
    </div>
  );
};
