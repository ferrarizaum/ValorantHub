import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { useMutation } from "@tanstack/react-query";
import Snackbar from "@mui/material/Snackbar";
import createWeapon from "../api/Weapons/createWeapon";

const useCreateWeapon = () => {
  return useMutation({
    mutationFn: (data) => createWeapon(data),
    onSuccess: () => {
      console.log("Weapon created successfully");
    },
    onError: (error) => {
      console.error("Error creating Weapon:", error);
    },
  });
};

const CreateWeaponPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading, isError, isSuccess } = useCreateWeapon();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [base64Image, setBase64Image] = useState("");

  const onSubmit = async (data) => {
    try {
      const formData = { ...data, file: base64Image };
      await mutate(formData);
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setBase64Image(reader.result);
      };
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
        <h2>Create Weapon</h2>
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

          <div>
            <label htmlFor="imageUrl">imageUrl:</label>
            <textarea id="imageUrl" rows="5" {...register("imageUrl")} />
            {errors.description && (
              <p className="error-message">{errors.description.message}</p>
            )}
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Weapon"}
          </button>
        </form>
      </div>

      <Snackbar
        open={snackbarOpen || isError}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message={
          isSuccess ? "Weapon created successfully!" : "An error occurred"
        }
        severity={isSuccess ? "success" : "error"}
      />
    </>
  );
};

export default CreateWeaponPage;
