import { FC } from "react";
import { ButtonAvi } from "../../../shared/ui/buttonViewCollection/ButtonAvi";
import "./BlockWithPicture.scss";

interface BlockWithPictureProps {
  firstImage: boolean;
  srcImage: string;
  title: string;
  disk?: string;
  disk2?: string;
}

export const BlockWithPicture: FC<BlockWithPictureProps> = ({
  firstImage = false,
  srcImage = "",
  title = "title",
  disk = "disk",
  disk2 = "",
}) => {
  return (
    <>
      {firstImage ? (
        <div className="block">
          <img className="image" src={srcImage} />
          <div className="block_info">
            <div className="title">{title}</div>
            <div className="disk">{disk}</div>
            <div className="disk2">{disk2}</div>
            <ButtonAvi title="Get in touch"/>
          </div>
        </div>
      ) : (
        <div className="block">
          <div className="block_info">
            <div className="title">{title}</div>
            <div className="disk">{disk}</div>
            <div className="disk2">{disk2}</div>
            <ButtonAvi title="Get in touch"/>
          </div>
          <img className="image" src={srcImage} />
        </div>
      )}
    </>
  );
};
