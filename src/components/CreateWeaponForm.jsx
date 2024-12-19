import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, Paper, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import createUser from "../api/Users/createUser";

const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      console.log("User created successfully");
    },
    onError: (error) => {
      console.error("Error creating user:", error);
    },
  });
};

function CreateWeaponForm() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate: createUserMutate, isLoading: isCreatingUser } =
    useCreateUser();

  const onSubmit = (data) => {
    const newUser = {
      userName: data.newUserName,
      password: data.newPassword,
    };
    createUserMutate(newUser, {
      onSuccess: () => {
        setOpen(!open);
      },
    });
  };

  return (
    <>
      <div>
        <Button onClick={() => setOpen(!open)}>Create new user</Button>
        <Modal open={open} onClose={() => setOpen(!open)}>
          <Paper
            elevation={4}
            style={{
              textAlign: "center",
              justifySelf: "center",
              margin: 20,
              padding: 20,
              width: 400,
              borderRadius: 5,
            }}
          >
            <div style={{ marginTop: 5, marginBottom: 20 }}>
              <h2>Create New User</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div style={{ marginBottom: 16 }}>
                <TextField
                  fullWidth
                  label="Username"
                  {...register("newUserName", {
                    required: "Username is required",
                  })}
                  error={!!errors.newUserName}
                  helperText={errors.newUserName?.message}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  {...register("newPassword", {
                    required: "Password is required",
                  })}
                  error={!!errors.newPassword}
                  helperText={errors.newPassword?.message}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                disabled={isCreatingUser}
              >
                {isCreatingUser ? "Creating user..." : "Create User"}
              </Button>
            </form>
          </Paper>
        </Modal>
      </div>
    </>
  );
}

export default CreateWeaponForm;
