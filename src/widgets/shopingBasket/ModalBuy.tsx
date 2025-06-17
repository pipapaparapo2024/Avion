import { FC, useState, useMemo } from "react";
import { CartItem } from "../../shared/ui/cart/CartStore";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";

interface ModalBuyProps {
  open: boolean;
  onClose: () => void;
  cartItems: CartItem[];
}

export const ModalBuy: FC<ModalBuyProps> = ({ open, onClose, cartItems }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.total, 0),
    [cartItems]
  );

  const handlePurchase = () => {
    // Здесь должна быть реальная логика обработки покупки
    console.log("Purchase completed", {
      items: cartItems,
      total: totalPrice,
      paymentInfo: { cardNumber, expiryDate, cvv },
    });

    onClose();
    toast.success("Purchase completed successfully!");
  };

  const formatCardNumber = (value: string) => {
    return value.replace(/\D/g, "").slice(0, 16);
  };

  const formatExpiryDate = (value: string) => {
    return value.replace(/(\d{2})(\d)/, "$1/$2").slice(0, 5);
  };

  const formatCvv = (value: string) => {
    return value.replace(/\D/g, "").slice(0, 3);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Checkout</Typography>
          <IconButton onClick={onClose} edge="end">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Box mb={3}>
          <Typography variant="subtitle1" gutterBottom>
            Your order:
          </Typography>
          <List dense>
            {cartItems.map((item) => (
              <div key={item.id}>
                <ListItem>
                  <ListItemText
                    primary={item.name}
                    secondary={`${item.quantity} × $${item.price.toFixed(2)}`}
                  />
                  <Typography>${item.total.toFixed(2)}</Typography>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Box>

        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            Total: ${totalPrice.toFixed(2)}
          </Typography>
        </Box>

        <Box mb={2}>
          <Typography variant="subtitle1" gutterBottom>
            Payment Information
          </Typography>
          <TextField
            label="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            fullWidth
            margin="normal"
            placeholder="1234 5678 9012 3456"
            inputProps={{ maxLength: 16 }}
          />
          <Box display="flex" gap={2}>
            <TextField
              label="Expiry Date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
              margin="normal"
              placeholder="MM/YY"
              sx={{ flex: 1 }}
              inputProps={{ maxLength: 5 }}
            />
            <TextField
              label="CVV"
              value={cvv}
              onChange={(e) => setCvv(formatCvv(e.target.value))}
              margin="normal"
              placeholder="123"
              sx={{ flex: 1 }}
              inputProps={{ maxLength: 3 }}
            />
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handlePurchase}
          color="primary"
          variant="contained"
          disabled={
            !cardNumber || !expiryDate || !cvv || cartItems.length === 0
          }
        >
          Pay ${totalPrice.toFixed(2)}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
