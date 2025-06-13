import { FC } from "react";
import { Button } from "@mui/material";
import { StaticRoutes } from "../../../app/app";
import { useNavigate } from "react-router-dom";

interface ButtonAviProps {
  padding?: string;
  background?: string;
  color?: string;
  margin?: string;
  onHandleClick?: (param?: any) => void;
  title?: string;
}

export const ButtonAvi: FC<ButtonAviProps> = ({
  padding = "16px 32px",
  background = "#F9F9F9",
  color = "#1f2937",
  margin = "40px 0px",
  title = "View Collection",
  onHandleClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onHandleClick) {
      onHandleClick();
    } else {
      navigate(StaticRoutes.All); 
    }
  };

  return (
    <Button
      sx={{
        padding,
        background,
        color,
        margin,
        fontFamily: "SatoshiRegular",
        whiteSpace: "nowrap",
        transition: "transform 0.2s ease",
        "&:hover": { 
          transform: "scale(1.05)",
        },
      }}
      onClick={handleClick}
      variant="text"
    >
      {title}
    </Button>
  );
};