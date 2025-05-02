import { FC } from "react";
import { InputSignUp } from "../../shared/inputSignUp/InputSignUp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "./Footer.scss";

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer_up">
        <div className="choice_list">
          <ul className="menu">
            Menu
            <li className="menu_item">New arrivals</li>
            <li className="menu_item">Best sellers</li>
            <li className="menu_item">Recently viewed</li>
            <li className="menu_item">Popular this week</li>
            <li className="menu_item">All products</li>
          </ul>
          <ul className="categories">
            Categories
            <li className="menu_item">Crockery</li>
            <li className="menu_item">Furniture</li>
            <li className="menu_item">Homeware</li>
            <li className="menu_item">Plant pots</li>
            <li className="menu_item">Chairs</li>
            <li className="menu_item">Crockery</li>
          </ul>
          <ul className="our_company">
            Our company
            <li className="menu_item">About us</li>
            <li className="menu_item">Vacancies</li>
            <li className="menu_item">Contact us</li>
            <li className="menu_item">Privacy</li>
            <li className="menu_item">Returns policy</li>
          </ul>
        </div>
        <div className="join_our">
          <span>Join our mailing list</span>
          <InputSignUp buttonBackground="#fff" buttonColor="#2A254B" inputBackground="#F5E6D3"/>
        </div>
      </div>
      <div className="footer_down">
        <span>Copyright 2022 Avion LTD</span>
        <ul className="icons">
          <li className="icons_item">
            <LinkedInIcon />
          </li>
          <li className="icons_item">
            <FacebookIcon />
          </li>
          <li className="icons_item">
            <InstagramIcon />
          </li>
          <li className="icons_item">
            <XIcon />
          </li>
          <li className="icons_item">
            <TwitterIcon />
          </li>
          <li className="icons_item">
            <PinterestIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};
