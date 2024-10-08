import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import createAgent from "../api/Agents/createAgent";
import { useMutation } from "@tanstack/react-query";
import Snackbar from "@mui/material/Snackbar";

const useCreateAgent = () => {
  return useMutation({
    mutationFn: (data) => createAgent(data),
    onSuccess: () => {
      console.log("Agent created successfully");
    },
    onError: (error) => {
      console.error("Error creating agent:", error);
    },
  });
};

const CreateAgentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading, isError, isSuccess } = useCreateAgent();
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

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
      <Navbar />
      <div>
        <h2>Create Agent</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="displayName">Display Name:</label>
            <input
              id="displayName"
              type="text"
              {...register("displayName", {
                required: "Display name is required",
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
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              rows="5"
              {...register("description", {
                required: "Description is required",
                maxLength: {
                  value: 200,
                  message: "Maximum length should be 200 characters",
                },
              })}
            />
            {errors.description && (
              <p className="error-message">{errors.description.message}</p>
            )}
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Agent"}
          </button>
        </form>
      </div>

      <Snackbar
        open={snackbarOpen || isError}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message={
          isSuccess ? "Agent created successfully!" : "An error occurred"
        }
        severity={isSuccess ? "success" : "error"}
      />
    </>
  );
};

export default CreateAgentPage;
