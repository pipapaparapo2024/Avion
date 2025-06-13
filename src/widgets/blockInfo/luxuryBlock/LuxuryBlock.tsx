import { FC } from "react";
import { ButtonAvi } from "../../../shared/ui/buttonViewCollection/ButtonAvi";
import homePageIntro from "../../../assets/image/homePage/home_page_intro.jpg";
import './luxuryBlock.scss'
export const LuxuryBlock: FC = () => {
  return (
    <div className="img_luxury">
      <div className="luxury_block">
        <span className="label">
          Luxury homeware for people who love timeless design quality
        </span>
        <div className="disk">Shop the new Spring 2022 collection today</div>
        <ButtonAvi />
      </div>
      <img className="background" src={homePageIntro} alt="Home Page Intro" />
    </div>
  );
};
