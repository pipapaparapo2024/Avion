import { FC,useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface NavigationMenuProps{
  background?:string;
}

export const NavigationMenu: FC<NavigationMenuProps> = ({background="white"}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{background}}>
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
    </div>
  );
};
