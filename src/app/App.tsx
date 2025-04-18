import { FC } from "react"
import { HomePage } from "../pages/HomePage/HomePage"
import { Route, Routes } from "react-router-dom"
import './index.css'
export const App:FC=()=> {
  return (
    <>
       <Routes>
        <Route path="/"element={<HomePage/>}></Route>
        {/* <Route path="/"element={<AboutPage/>}></Route>
        <Route path="/"element={<ProductPage/>}></Route>
        <Route path="/"element={<AllProductPage/>}></Route>
        <Route path="/"element={<ShoppingBasketPage/>}></Route> */}
      </Routes> 
      <div className="font-mono">hello world</div>
    </>
  )
}

