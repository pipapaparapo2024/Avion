import { FC } from "react";
import { FreeDelivery } from "../widgets/FreeDelivery/FreeDelivery";
import { BrandDifferent } from "../widgets/BrandDifferent/BrandDifferent";
import { Header } from "../widgets/Header/Header";
export const Layout: FC = () => {
  return (
    <>
      <div>
        <FreeDelivery/>
        <Header/>
        <BrandDifferent/> 
      </div>
    </>
  );
};
