import { FC } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CompostIcon from "@mui/icons-material/Compost";
import "./BrandDifferent.scss";
export const BrandDifferent: FC = () => {
  return (
    <>
      <div className="main_div">
        <div className="main_title">What makes our brand different</div>
        <ul>
          <li>
            <LocalShippingIcon />
            <div className="title">Next day as standard</div>
            <div className="disk">
              Order before 3pm and get your order the next day as standard
            </div>
          </li>
          <li>
            <CheckCircleOutlineIcon />
            <div className="title">Made by true artisans</div>
            <div className="disk">
              Handmade crafted goods made with real passion and craftmanship
            </div>
          </li>
          <li>
            <AccountBalanceWalletIcon />
            <div className="title">Unbeatable prices</div>
            <div className="disk">
              For our materials and quality you won’t find better prices
              anywhere
            </div>
          </li>
          <li>
            <CompostIcon />
            <div className="title">Recycled packaging</div>
            <div className="disk">
              We use 100% recycled to ensure our footprint is more manageable
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
