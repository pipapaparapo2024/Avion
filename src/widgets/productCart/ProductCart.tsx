import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductCart.scss";
import { Button } from "@mui/material";
import { ButtonAvi } from "../../shared/ui/buttonViewCollection/ButtonAvi";
import { useCartStore } from "../../shared/ui/cart/CartStore";
import { useFurnitureStore } from "../listProducts/ListProductsStore";
import { toast } from "react-toastify";

export const ProductCart: FC = () => {
  const { FurnitureContainer, getFurniture, updateFurnitureStock } =
    useFurnitureStore();
  const { pushCart } = useCartStore();
  const { id } = useParams<{ id: string }>();

  const furniture = FurnitureContainer.find(
    (item) => item.id.toString() === id
  );

  const [count, setCount] = useState(1);

  useEffect(() => {
    if (furniture?.remaining !== undefined) {
      setCount(Math.min(1, furniture.remaining));
    }
  }, [furniture?.id]);

  const minusCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const plusCount = () => {
    const stock = furniture?.remaining || 0;
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleAddToCart = () => {
    if (!furniture) return;

    const { id, remaining = 0 } = furniture;

    if (remaining <= 0) {
      toast.error("Товар закончился!");
      return;
    }

    if (count > remaining) {
      toast.warn(`Нельзя добавить больше ${remaining} шт.`);
      return;
    }

    pushCart(furniture, count);
    updateFurnitureStock(id, remaining - count);
    setCount(1);

    toast.success("Товар добавлен в корзину!");
  };

  useEffect(() => {
    getFurniture();
  }, []);

  if (!furniture) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product_cart">
      <img src={furniture.url} alt="furniture" />
      <div className="block_info">
        <h1 className="title">{furniture.name}</h1>
        <div className="price">${furniture.price}</div>
        <div className="description">
          <h3>Description</h3>
          <p>{furniture.shortDescription}</p>
        </div>
        <div className="features">
          <ul className="features_list">
            {furniture.features?.map((feature, index) => (
              <li className="features_item" key={index}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="dimensions">
          <h3>Dimensions</h3>
          <ul className="dimensions_list">
            <li>
              <div className="disk_item">Height</div>
              <div className="param_item">{furniture.dimensions?.height}cm</div>
            </li>
            <li>
              <div className="disk_item">Width</div>
              <div className="param_item">{furniture.dimensions?.width}cm</div>
            </li>
            <li>
              <div className="disk_item">Depth</div>
              <div className="param_item">{furniture.dimensions?.depth}cm</div>
            </li>
          </ul>
        </div>
        <div className="block_amount">
          <div className="amount_counter">
            <div className="title_counter">Amount:</div>
            <div className="counter_cart">
              <Button sx={{ padding: "16px 5px" }} onClick={minusCount}>
                -
              </Button>
              {count}
              <Button sx={{ padding: "16px 5px" }} onClick={plusCount}>
                +
              </Button>
            </div>
          </div>
          <ButtonAvi
            color="#FFFFFF"
            background="#2A254B"
            title="Add to cart"
            onHandleClick={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};
