import React, { useState } from "react";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { Button, Modal, Paper, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import createWeapon from "../api/Weapons/createWeapon";

const useCreateWeapon = () => {
  return useMutation({
    mutationFn: createWeapon,
    onSuccess: () => {
      window.location.reload();
      console.log("Weapon created successfully");
    },
    onError: (error) => {
      console.error("Error creating weapon:", error);
    },
  });
};

function CreateWeaponForm() {
  const [open, setOpen] = useState(false);
  const user = Cookies.get("userName");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate: createWeaponMutate, isLoading: isCreatingWeapon } =
    useCreateWeapon();

  const onSubmit = (data) => {
    const newWeapon = {
      displayName: data.displayName,
      description: data.description,
      imageUrl: data.imageUrl,
      createdBy: user,
    };
    createWeaponMutate(newWeapon, {
      onSuccess: () => {
        setOpen(!open);
      },
    });
  };

  return (
    <>
      <div>
        <Button
          sx={{
            height: 40,
            backgroundColor: "#000000",
            color: "white",
            m: 2,
            p: 2,
          }}
          onClick={() => setOpen(!open)}
        >
          Create new weapon
        </Button>
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
              <h2>Create New Agent</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div style={{ marginBottom: 16 }}>
                <TextField
                  fullWidth
                  label="DisplayName"
                  {...register("displayName", {
                    required: "displayName is required",
                  })}
                  error={!!errors.displayName}
                  helperText={errors.displayName?.message}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <TextField
                  fullWidth
                  label="Description"
                  {...register("description", {
                    required: "description is required",
                  })}
                  error={!!errors.description}
                  helperText={errors.description?.message}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <TextField
                  fullWidth
                  type="imageUrl"
                  label="imageUrl"
                  {...register("imageUrl", {
                    required: "imageUrl is required",
                  })}
                  error={!!errors.imageUrl}
                  helperText={errors.imageUrl?.message}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                disabled={isCreatingWeapon}
              >
                {isCreatingWeapon ? "Creating weapon..." : "Create Weapon"}
              </Button>
            </form>
          </Paper>
        </Modal>
      </div>
    </>
  );
}

export default CreateWeaponForm;
