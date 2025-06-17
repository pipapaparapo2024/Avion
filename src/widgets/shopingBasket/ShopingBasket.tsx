import { FC, useState } from "react";
import "./ShopingBasket.scss";
import { Cart } from "../../shared/ui/cart/Cart";
import { useCartStore } from "../../shared/ui/cart/CartStore";
import { ButtonAvi } from "../../shared/ui/buttonViewCollection/ButtonAvi";
import { useUserStore } from "../../entities/user/useUserSlice";
import { ModalBuy } from "./ModalBuy";
import { useNavigate } from "react-router-dom";

export const ShopingBasket: FC = () => {
  const { isAuthenticated } = useUserStore();
  const { CartContainer, cartTotal } = useCartStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (isAuthenticated) {
      setIsModalOpen(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="main">
      <div className="header">Your shopping cart</div>
      <div className="carts_list">
        <div className="carts_header">
          <ul className="disk">
            <li className="disk_elem">Product</li>
            <li className="disk_elem">Quantity</li>
            <li className="disk_elem">Total</li>
          </ul>
        </div>
        {CartContainer.map((furniture) => (
          <Cart key={furniture.id} furniture={furniture} />
        ))}
      </div>
      <div className="footer_cart">
        <div className="total">
          <span className="subtotal">Subtotal </span>
          <span className="price">${cartTotal.toFixed(2)}</span>
        </div>
        <div className="footer_disk">
          <div className="signature">
            Taxes and shipping are calculated at checkout
          </div>
          <ButtonAvi
            background="#2A254B"
            color="#FFFFFF"
            title="Go to checkout"
            margin="0 0 50px 0"
            onHandleClick={handleCheckout}
          />
        </div>
      </div>

      <ModalBuy
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cartItems={CartContainer}
      />
    </div>
  );
};