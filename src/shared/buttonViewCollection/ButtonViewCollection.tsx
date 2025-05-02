import { FC } from "react";
import { Button } from "@mui/material";

interface ButtonViewCollectionProps {
  padding?: string;
  background?: string;
  color?: string;
  margin?: string;
}
export const ButtonViewCollection: FC<ButtonViewCollectionProps> = ({
  padding = "16px 32px",
  background = "#F9F9F9",
  color = "#1f2937",
  margin = "40px 0px",
}) => {
  return (
    <>
      <Button
        sx={{
          padding,
          background,
          color,
          margin,
        }}
        variant="text"
      >
        View collection
      </Button>
    </>
  );
};
