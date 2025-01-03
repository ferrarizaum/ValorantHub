import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";
import Cookies from "js-cookie";

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
  const { logout } = useAuth();
  const user = Cookies.get("userName");

  return (
    <>
      <div
        style={{
          backgroundColor: "#333333",
          borderRadius: "2px 2px 2px 2px",
        }}
      >
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
            {user === "admin" && (
              <li>
                <button style={buttonStyle} onClick={() => navigate("/users")}>
                  Users
                </button>
              </li>
            )}
          </ul>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "25px" }}>
              <p style={{ color: "white" }}>
                Welcome {Cookies.get("userName")}
              </p>
            </div>
            <div>
              <button style={buttonStyle} onClick={() => logout()}>
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
