import { FC } from "react";
import { Furniture } from "../../../widgets/listProducts/ListProductsStore";
import { useCartStore } from "./CartStore";
import './Cart.scss'
interface CartProps {
  furniture: Furniture;
}

export const Cart: FC<CartProps> = ({ furniture }) => {
  const { CartContainer } = useCartStore();

  const cartItem = CartContainer.find(item => item.id === furniture.id);

  return (
    <div className="cart">
      <img src={furniture.url} alt="" className="cart_image" />
      <div className="info">
        <div className="title">{furniture.name}</div>
        <div className="disk">{furniture.shortDescription}</div>
        <div className="price">${furniture.price}</div>
      </div>
      <div className="quantity">
        {cartItem?.quantity}
      </div>
      <div className="total">
        ${cartItem ? cartItem.total : 0}
      </div>
    </div>
  );
};