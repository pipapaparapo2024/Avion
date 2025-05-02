import { FC } from "react";

import imageBlock from "../../assets/image/homePage/Image Block.png";
import { ButtonViewCollection } from "../../shared/buttonViewCollection/ButtonViewCollection";
import "./SmallIdea.scss";

export const SmallIdea: FC = () => {
  return (
    <div className="smallIdea">
      <div className="block">
        <span className="label">It started with a small idea</span>
        <div className="disk">
          A global brand with local beginnings, our story begain in a small
          studio in South London in early 2014
        </div>
        <ButtonViewCollection padding="16px 32px" background="#000080" color="#fff" margin="0px"/>
      </div>
      <img src={imageBlock} alt="" className="" />
    </div>
  );
};
