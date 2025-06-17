import { FC } from "react";
import { TopBar } from "../../shared/ui/topBar/TopBar";
import { Layout } from "../../shared/layout/Layout";
import { NavigationMenu } from "../../shared/ui/navigationMenu/NavigationMenu";
import { ShopingBasket } from "../../widgets/shopingBasket/ShopingBasket";
import { Footer } from "../../widgets/footer/Footer";

export const ShoppingBasketPage: FC = () => {
  return (
    <>
      <Layout>
        <TopBar />
        <NavigationMenu />
        <ShopingBasket/>
        <Footer/>
      </Layout>
    </>
  );
};
