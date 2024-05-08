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
        }}
      >
        <div>
          <h1>Welcome to ValorantHub</h1>
        </div>
        <div>
          <h1>{useUserName().username}</h1>
        </div>
        <div>
          <input
            type="text"
            value={userName}
            onChange={handleChange}
            placeholder="Type your name"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
