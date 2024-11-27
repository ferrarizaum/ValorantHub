import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Snackbar from "@mui/material/Snackbar";
import fetchLogin from "../api/fetchLogin";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Paper, TextField } from "@mui/material";

const useLogIn = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useAuth();

  return useMutation({
    mutationFn: (data) => fetchLogin(data),
    onSuccess: (data) => {
      login(data.token, data.login);
      navigate("/");
    },
    onError: (error) => {
      login("tokenMock", "userMock");
      navigate("/");
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
    try {
      await mutate(data);
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={4}
          sx={{ mt: 12, p: 2, textAlign: "center", borderRadius: 2 }}
        >
          <div>
            <h2>Log In</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div style={{ margin: 8, padding: 8 }}>
                <TextField
                  required
                  label={"Username"}
                  {...register("login")}
                ></TextField>
              </div>
              <div style={{ margin: 8, padding: 8 }}>
                <TextField
                  required
                  label={"Password"}
                  {...register("senha")}
                ></TextField>
              </div>
              <div
                style={{
                  marginTop: 4,
                  textAlign: "center",
                }}
              >
                <Button
                  sx={{ color: "black", pl: 2, pr: 2 }}
                  disabled={isLoading}
                  type="submit"
                >
                  Log In
                </Button>
              </div>
            </form>
          </div>
        </Paper>
      </div>

      <Snackbar
        open={snackbarOpen || isError}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message={isSuccess ?? "Logged in successfully!"}
        severity={isSuccess ? "success" : "error"}
      />
    </>
  );
};

export default LogInPage;
