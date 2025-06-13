import { FC } from "react";
import "./ContactFormText.scss";
import { InputSignUp } from "../../../shared/ui/inputSignUp/InputSignUp";

export const ContactFormText: FC = () => {
  return (
    <div className="block_main">
      <div className="block_inside">
        <div className="text">
            <div className="title">Join the club and get the benefits</div>
            <div className="disk">
              Sign up for our newsletter and receive exclusive offers on new ranges,
              sales, pop up stores and more
            </div>
        </div>
        <InputSignUp />
      </div>
    </div>
  );
};
