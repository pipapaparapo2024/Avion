import { FC } from "react";
import { TopBar } from "../../shared/ui/topBar/TopBar";
import {NavigationMenu} from '../../shared/ui/navigationMenu/NavigationMenu'
import { LuxuryBlock } from "../../widgets/blockInfo/luxuryBlock/LuxuryBlock";
export const Header: FC = () => {
  return (
    <>
      <TopBar/>
      <NavigationMenu/>
      <LuxuryBlock/>
    </>
  );
};
