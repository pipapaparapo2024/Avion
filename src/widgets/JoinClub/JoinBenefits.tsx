import { FC } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { InputSignUp } from "../../shared/inputSignUp/InputSignUp";
import "./JoinBenefits.scss";

export const JoinBenefits: FC = () => {
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