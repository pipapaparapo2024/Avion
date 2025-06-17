import { FC } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { LoginFormData, useUserStore } from "../../entities/user/useUserSlice";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.scss"; 

export const RegisterForm: FC = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const { registerUser } = useUserStore();
  const navigate = useNavigate();

  const onSubmit = async (User: LoginFormData) => {
    registerUser(User)
      .then(() => {
        navigate("/");
        toast.success("Регистрация прошла успешно");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="register_form_container">
      <div className="form_buttons">
        <Button
          variant="contained"
          className="form_button"
          onClick={() => navigate("/Login")}
        >
          Login
        </Button>
        <Button
          variant="contained"
          className="form_button"
          onClick={() => navigate("/Register")}
        >
          Register
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="form_inputs">
          <TextField
            className="form_input"
            {...register("email")}
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            className="form_input"
            {...register("password")}
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </section>
        <Button
          className="submit_button"
          type="submit"
          variant="contained"
          fullWidth
        >
          Register
        </Button>
      </form>
    </div>
  );
};