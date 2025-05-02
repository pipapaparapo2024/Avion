import { FC, useEffect } from "react";
import { useFurnitureStore } from "./ListProductsStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ListProduct.scss";
import { ButtonViewCollection } from "../../shared/buttonViewCollection/ButtonViewCollection";
export const ListProducts: FC = () => {
  const { FurnitureContainer, getFurniture } = useFurnitureStore();

  useEffect(() => {
    getFurniture();
  }, []);

  return (
    <div className="slider_main">
      <div className="slider_container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          // navigation
          // pagination={{ clickable: true }}
          breakpoints={{
            390: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            870: { slidesPerView: 3 },
            1270: { slidesPerView: 4 },
          }}
        >
          {FurnitureContainer.map((furniture) => (
            <SwiperSlide key={furniture.id}>
              <div className="slider_item">
                <img src={furniture.url} alt={furniture.name} />
                <h2>{furniture.name}</h2>
                <p>Price: ${furniture.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ButtonViewCollection/>
    </div>
  );
};
