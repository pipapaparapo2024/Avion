import { FC } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { InputSignUp } from "../../../shared/ui/inputSignUp/InputSignUp";
import "./ContactForm.scss";

export const ContactForm: FC = () => {
  return (
    <div className="block_benefits">
      <div className="block_text">
        <span>Join the club and get the benefits</span>
        <div>
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </div>
        <ul>
          <li>
            <CheckCircleIcon />
            Exclusive offers
          </li>
          <li>
            <CheckCircleIcon/>
            Free events
          </li>
          <li>
            <CheckCircleIcon/>
            Large discounts
          </li>
        </ul>
        <InputSignUp/>
      </div>
    </div>
  );
};