import React from "react";
import Navbar from "../components/Navbar";
import { useUserName } from "../components/UserNameProvider";

const Home = () => {
  const { userName, updateUsername } = useUserName();

  const handleChange = (event) => {
    updateUsername(event.target.value);
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: 24,
        }}
      >
        <div>
          <h1>Welcome to ValorantHub</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
