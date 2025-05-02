import { FC, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Header.scss";
import homePageIntro from "../../assets/image/homePage/home_page_intro.jpg";
import { ButtonViewCollection } from "../../shared/buttonViewCollection/ButtonViewCollection";
export const Header: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div className="top_bar">
        <div className="left_section">
          <SearchIcon className="search_icon" />
          <span className="brand_name">Avion</span>
        </div>
        <div className="right_section">
          <ShoppingCartIcon className="icon" />
          <AccountBoxIcon className="icon" />
        </div>
      </div>

      <div className="menu_mobile">
        <MenuIcon onClick={handleMenuOpen} className="menu_icon" />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Plant pots</MenuItem>
          <MenuItem onClick={handleMenuClose}>Ceramics</MenuItem>
          <MenuItem onClick={handleMenuClose}>Tables</MenuItem>
          <MenuItem onClick={handleMenuClose}>Chairs</MenuItem>
          <MenuItem onClick={handleMenuClose}>Crockery</MenuItem>
          <MenuItem onClick={handleMenuClose}>Tableware</MenuItem>
          <MenuItem onClick={handleMenuClose}>Cutlery</MenuItem>
        </Menu>
      </div>
      <ul className="menu_desktop">
        <li>Plant pots</li>
        <li>Ceramics</li>
        <li>Tables</li>
        <li>Chairs</li>
        <li>Crockery</li>
        <li>Tableware</li>
        <li>Cutlery</li>
      </ul>
      <div className="img_luxury">
        <div className="luxury_block">
          <span className="label">
            Luxury homeware for people who love timeless design quality
          </span>
          <div className="disk">Shop the new Spring 2022 collection today</div>
          <ButtonViewCollection />
        </div>
        <img className="background" src={homePageIntro} alt="Home Page Intro" />
      </div>
    </div>
  );
};
