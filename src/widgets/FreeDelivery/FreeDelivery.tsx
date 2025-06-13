import { FC, useState } from "react";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ClearIcon from "@mui/icons-material/Clear";
import "./FreeDelivery.scss";
export const FreeDelivery: FC = () => {
  const [isClear, setIsClear] = useState(false);

  return (
    <>
      {!isClear && (
        <div className="free-delivery">
          <div className="content">
            <div className="icon-text">
              <DeliveryDiningIcon className="icon" />
              <span>
                Free delivery on all orders over £50 with code easter checkout
              </span>
            </div>
            <ClearIcon
              onClick={() => setIsClear(true)}
              className="clear-icon"
            />
          </div>
        </div>
      )}
    </>
  );
};
