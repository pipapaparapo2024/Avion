import { FC } from "react";
import { Layout } from "../../shared/Layout";
import { FreeDelivery } from "../../widgets/freeDelivery/FreeDelivery";
import { Header } from "../../widgets/header/Header";
import { BrandDifferent } from "../../widgets/brandDifferent/BrandDifferent";
import { ListProducts } from "../../widgets/listProducts/ListProduct";
import { SmallIdea } from "../../widgets/smallIdea/SmallIdea";
import { ContactForm } from "../../widgets/joinClub/contactForm/contactForm.tsx";
import { Footer } from "../../widgets/footer/Footer";

export const HomePage: FC = () => {
  return (
    <Layout>
      <FreeDelivery />
      <Header />
      <BrandDifferent />
      <ListProducts />
      <SmallIdea />
      <ContactForm />
      <Footer />
    </Layout>
  );
};