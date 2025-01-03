import React from "react";
import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import fetchUsers from "../api/Users/fetchUsers";

const UsersPage = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
  });
  return (
    <>
      <Navbar />
      <div>
        <h1>Users</h1>
        {data.map((e) => (
          <div>
            <h2>{e.userName}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersPage;
