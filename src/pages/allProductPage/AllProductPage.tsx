import { FC } from "react";
import { Layout } from "../../shared/layout/Layout";
import { TopBar } from "../../shared/ui/topBar/TopBar";
import { NavigationMenu } from "../../shared/ui/navigationMenu/NavigationMenu";
import { Footer } from "../../widgets/footer/Footer";
import { HeaderAllProducts } from "../../widgets/blockInfo/headerAllProducts/HeaderAllProducts";
import { AllProductList } from "../../widgets/allProducts/allProductList/AllProductList";

export const AllProductPage: FC = () => {
  return (
    <>
      <Layout>
        <TopBar />
        <NavigationMenu />
        <HeaderAllProducts/>
        <AllProductList/>
        <Footer />
      </Layout>
    </>
  );
};
