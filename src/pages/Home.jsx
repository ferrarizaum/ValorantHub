import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Welcome to ValorantHub</h1>
      </div>
    </>
  );
};

export default Home;
