import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserName } from "./UserNameProvider";

export const buttonStyle = {
  backgroundColor: "#000000",
  color: "white",
  border: "none",
  padding: "10px 20px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s",
  marginRight: "10px",
};

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ backgroundColor: "#333333", borderRadius: "10px" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "center",
            padding: "1em",
          }}
        >
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              paddingLeft: "6em",
              margin: 0,
            }}
          >
            <li>
              <button style={buttonStyle} onClick={() => navigate("/")}>
                Home
              </button>
            </li>
            <li>
              <button style={buttonStyle} onClick={() => navigate("/agents")}>
                Agents
              </button>
            </li>
            <li>
              <button style={buttonStyle} onClick={() => navigate("/weapons")}>
                Weapons
              </button>
            </li>
          </ul>
          <div style={{ marginRight: "25px" }}>
            <p style={{ color: "white" }}>Welcome {useUserName().username}</p>{" "}
            {/* change to username auth*/}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
