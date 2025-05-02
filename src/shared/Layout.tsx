import { FC } from "react";

import { FreeDelivery } from "../widgets/FreeDelivery/FreeDelivery";
import { BrandDifferent } from "../widgets/BrandDifferent/BrandDifferent";
import { Header } from "../widgets/Header/Header";
import { ListProducts } from "../widgets/listProducts/ListProduct";
import { SmallIdea } from "../widgets/smallIdea/SmallIdea";
import { JoinBenefits } from "../widgets/JoinClub/JoinBenefits";
import { Footer } from "../widgets/Footer/Footer";
import './Layout.scss';

export const Layout: FC = () => {
  return (
    <>
      <div className="default">
        <FreeDelivery />
        <Header />
        <BrandDifferent />
        <ListProducts/>
        <SmallIdea/>
        <JoinBenefits/>
        <Footer/>
      </div>
    </>
  );
};