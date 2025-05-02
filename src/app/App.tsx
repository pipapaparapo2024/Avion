import { FC } from "react";
import { HomePage } from "../pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import "./styles/font.css";
import "./styles/reset.css"
export const App: FC = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/"element={<AboutPage/>}></Route>
        <Route path="/"element={<ProductPage/>}></Route>
        <Route path="/"element={<AllProductPage/>}></Route>
        <Route path="/"element={<ShoppingBasketPage/>}></Route> */}
      </Routes>
    </div>
  );
};
