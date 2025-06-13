import { FC } from "react";
import { Button } from "@mui/material";
interface InputSignUpProps {
  inputPadding?: string;
  inputBackground?: string;
  inputColor?: string;

  buttonPadding?: string;
  buttonBackground?: string;
  buttonColor?: string;
}

export const InputSignUp: FC<InputSignUpProps> = ({
  inputPadding = "16px 32px",
  inputBackground = "#F9F9F9",
  inputColor = "#1f2937",
  buttonPadding = "16px 32px",
  buttonBackground = "#2A254B",
  buttonColor = "white",
}) => {
  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        maxWidth: "600px",
        margin: "0px auto",
        width: "100%",
      }}
    >
      <input
        style={{
          background: inputBackground,
          width: "100%",
          padding: inputPadding,
          flex: 1,
          fontSize: "16px",
          color: inputColor,
          border: "none",
        }}
        type="email"
        placeholder="your@email.com"
      />
      <Button
        type="submit"
        sx={{
          background: buttonBackground,
          color: buttonColor,
          padding: buttonPadding,
          border: "none",
          cursor: "pointer",
          whiteSpace: "nowrap",
          transition: "all 0.2s ease",
          borderRadius: 0, 
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        Sign up
      </Button>
    </form>
  );
};
