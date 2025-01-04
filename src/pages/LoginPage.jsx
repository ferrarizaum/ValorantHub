import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Snackbar from "@mui/material/Snackbar";
import fetchLogin from "../api/fetchLogin";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Paper, TextField, Alert } from "@mui/material";
import CreateUserForm from "../components/CreateUserForm";

const useLogIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return useMutation({
    mutationFn: fetchLogin,
    onSuccess: (data) => {
      login(data.token, data.userName);
      navigate("/");
    },
    onError: (error) => {
      console.error("Error logging in:", error);
    },
  });
};

const LogInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate, isLoading, isError, isSuccess } = useLogIn();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const onSubmit = async (data) => {
    const loginData = {
      userName: data.loginUserName,
      password: data.loginPassword,
    };
    mutate(loginData, {
      onSuccess: () => setSnackbarOpen(true),
    });
  };

  const handleSnackbarClose = () => setSnackbarOpen(false);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          borderRadius: 2,
          textAlign: "center",
          width: 300,
        }}
      >
        <h2 style={{ marginBottom: 10 }}>Log In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: 16 }}>
            <TextField
              fullWidth
              label="Username"
              {...register("loginUserName", {
                required: "Username is required",
              })}
              error={!!errors.userName}
              helperText={errors.userName?.message}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              {...register("loginPassword", {
                required: "Password is required",
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Sign In"}
            </Button>
            <div style={{ marginTop: 5 }}>
              <CreateUserForm />
            </div>
          </div>
        </form>
        {isError && (
          <Alert severity="error" sx={{ marginTop: 2 }}>
            Error logging in. Please try again.
          </Alert>
        )}
      </Paper>

      <Snackbar
        open={snackbarOpen || isError}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={isSuccess ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {isSuccess ? "Logged in successfully!" : "Login failed"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LogInPage;
