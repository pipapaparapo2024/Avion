import { FC } from "react";
import { Layout } from "../../shared/layout/Layout";
import { TopBar } from "../../shared/ui/topBar/TopBar";
import { FreeDelivery } from "../../widgets/freeDelivery/FreeDelivery";
import { NavigationMenu } from "../../shared/ui/navigationMenu/NavigationMenu";
import { BlockInfoAbP } from "../../widgets/blockInfo/InfoAboutPage/InfoAboutPage";
import { BlockWithPicture } from "../../widgets/blockInfo/blockWithPicture/BlockWithPicture";
import image_first from '../../assets/image/aboutPage/Image_fisrt.png'
import image_second from '../../assets/image/aboutPage/Image_second.png'
import { BrandDifferent } from "../../widgets/brandDifferent/BrandDifferent";
import { ContactForm } from "../../widgets/joinClub/contactForm/contactForm";
import { Footer } from "../../widgets/footer/Footer";
export const AboutPage: FC = () => {
  return (
    <>
      <Layout>
        <FreeDelivery />
        <TopBar />
        <NavigationMenu background="#F9F9F9" />
        <BlockInfoAbP />
        <div style={{marginBottom:"60px"}}>
          <BlockWithPicture
            title="From a studio in London to a global brand with
  over 400 outlets"
            disk="When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market."
            disk2="Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community."
            firstImage={false}
            srcImage={image_first}
          />
          <BlockWithPicture
            title="Our service isn’t just personal, it’s actually
  hyper personally exquisite"
            disk="When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market."
            disk2="Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community."
            firstImage={true}
            srcImage={image_second}
          />
        </div>
        <BrandDifferent/>
        <ContactForm/>
        <Footer/>
      </Layout>
    </>
  );
};
