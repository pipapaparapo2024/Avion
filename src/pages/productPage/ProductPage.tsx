import { FC } from "react";
import { Layout } from "../../shared/layout/Layout";
import { ProductCart } from "../../widgets/productCart/ProductCart";
import { FreeDelivery } from "../../widgets/freeDelivery/FreeDelivery";
import { TopBar } from "../../shared/ui/topBar/TopBar";
import { NavigationMenu } from "../../shared/ui/navigationMenu/NavigationMenu";
import { ListProducts } from "../../widgets/listProducts/ListProduct";
import { BrandDifferent } from "../../widgets/brandDifferent/BrandDifferent";
import { ContactFormText } from "../../widgets/joinClub/contactFormText/ContactFormText";
import { Footer } from "../../widgets/footer/Footer";

export const ProductPage: FC = () => {
  return (
    <Layout>
      <FreeDelivery />
      <TopBar>
        <NavigationMenu />
      </TopBar>
      <ProductCart />
      <ListProducts/>
      <BrandDifferent/>
      <ContactFormText/>
      <Footer/>
    </Layout>
  );
};
