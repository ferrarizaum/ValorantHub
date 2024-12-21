import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, Paper, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import createAgent from "../api/Agents/createAgent";
import { buttonStyle } from "./Navbar";

const useCreateAgent = () => {
  return useMutation({
    mutationFn: createAgent,
    onSuccess: () => {
      window.location.reload();
      console.log("Agent created successfully");
    },
    onError: (error) => {
      console.error("Error creating agent:", error);
    },
  });
};

function CreateAgentForm() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate: createAgentMutate, isLoading: isCreatingAgent } =
    useCreateAgent();

  const onSubmit = (data) => {
    const newAgent = {
      displayName: data.displayName,
      description: data.description,
      imageUrl: data.imageUrl,
    };
    createAgentMutate(newAgent, {
      onSuccess: () => {
        setOpen(!open);
      },
    });
  };

  return (
    <>
      <div>
        <Button style={buttonStyle} onClick={() => setOpen(!open)}>
          Create new agent
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
                disabled={isCreatingAgent}
              >
                {isCreatingAgent ? "Creating agent..." : "Create Agent"}
              </Button>
            </form>
          </Paper>
        </Modal>
      </div>
    </>
  );
}

export default CreateAgentForm;
