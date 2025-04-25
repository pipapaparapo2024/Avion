import { FC, useState } from "react";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ClearIcon from '@mui/icons-material/Clear';

export const FreeDelivery: FC = () => {
  const [isClear, setIsClear] = useState(false);

  return (
    <>
      {!isClear && (
        <div className="bg-blue-900 text-white py-2 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <DeliveryDiningIcon className="text-2xl mr-3" />
              <span>Free delivery on all orders over £50 with code easter checkout</span>
            </div>
            <ClearIcon
              onClick={() => setIsClear(true)}
              className="text-2xl cursor-pointer ml-3 hover:scale-120 transition-transform duration-1000"
            />
          </div>
        </div>
      )}
    </>
  );
};