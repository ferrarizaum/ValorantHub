import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Snackbar from "@mui/material/Snackbar";
import fetchLogin from "../api/fetchLogin";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";

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
      <div>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="login">Username:</label>
            <input
              id="login"
              type="text"
              {...register("login", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Minimum length should be 3 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Maximum length should be 50 characters",
                },
              })}
            />
            {errors.displayName && (
              <p className="error-message">{errors.displayName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="senha">Password:</label>
            <input
              id="senha"
              {...register("senha", {
                required: "Password is required",
                maxLength: {
                  value: 50,
                  message: "Maximum length should be 50 characters",
                },
                minLength: {
                  value: 3,
                  message: "Minimum length should be 3 characters",
                },
              })}
            />
            {errors.description && (
              <p className="error-message">{errors.description.message}</p>
            )}
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log in"}
          </button>
        </form>
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
