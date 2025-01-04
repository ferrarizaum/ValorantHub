import React from "react";
import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import fetchUsers from "../api/Users/fetchUsers";
import deleteUser from "../api/Users/deleteUser";
import { useMutation } from "@tanstack/react-query";

const useDeleteUser = () => {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      window.location.reload();
      console.log("User deleted successfully");
    },
    onError: (error) => {
      console.error("Error deleting user:", error);
    },
  });
};

const UsersPage = () => {
  const { data = [] } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
  });

  const { mutate: deleteUserMutate } = useDeleteUser();

  const onSubmit = (data) => {
    console.log(data);
    deleteUserMutate(data, {
      onSuccess: () => {},
    });
  };
  return (
    <>
      <Navbar />
      <div style={{ justifyItems: "center", marginTop: 20 }}>
        <h1 style={{ color: "white" }}>Users</h1>
        {data.map((e) => (
          <div key={e.userName} style={{ marginTop: 25 }}>
            <div onClick={() => onSubmit(e.userName)}>X</div>
            <h2>{e.userName}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersPage;
