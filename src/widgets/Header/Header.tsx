import { FC, useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const Header: FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 710);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 710);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center py-5 border-b border-gray-300">
          <div className="flex items-center space-x-2">
            <SearchIcon className="text-gray-800 ml-2" />
            <span className="text-gray-800 font-bold">Avion</span>
          </div>
          <div className="flex items-center space-x-4">
            <ShoppingCartIcon className="text-gray-400 cursor-pointer" />
            <AccountBoxIcon className="text-gray-400 cursor-pointer mr-2" />
          </div>
        </div>

        {isMobile ? (
          <div className="block mt-3">
            <MenuIcon
              onClick={handleMenuOpen} 
              className="text-gray-800 cursor-pointer ml-3"
            />
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
        ) : (
          <ul className="flex flex-row text-[#726E8D] justify-center p-5 space-x-10">
            <li className="text-gray-400">Plant pots</li>
            <li className="text-gray-400">Ceramics</li>
            <li className="text-gray-400">Tables</li>
            <li className="text-gray-400">Chairs</li>
            <li className="text-gray-400">Crockery</li>
            <li className="text-gray-400">Tableware</li>
            <li className="text-gray-400">Cutlery</li>
          </ul>
        )}
      </div>
    </>
  );
};