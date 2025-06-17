import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useNavigate } from "react-router-dom";
import "./topBar.scss";
import {StaticRoutes} from '../../../app/app'

interface TopBarProps {
  children?: React.ReactNode;
}

export const TopBar: FC<TopBarProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className={`top_bar ${children ? "has-children" : ""}`}>
      <div className="left_section">
        <SearchIcon className="search_icon" />
        <span onClick={()=>navigate(StaticRoutes.Home)} className="brand_name">Avion</span>
      </div>
      {children}
      <div className="right_section">
        <ShoppingCartIcon onClick={()=>navigate(StaticRoutes.ShopBasket)} className="icon" />
        <AccountBoxIcon onClick={()=>navigate(StaticRoutes.Login)} className="icon" />
      </div>
    </div>
  );
};
