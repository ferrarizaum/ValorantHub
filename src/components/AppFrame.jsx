import React from "react";

const AppFrame = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#808080",
        margin: 0,
        padding: 0,
        overflowY: "auto",
        fontFamily: "Roboto",
        fontSize: "Medium",
        background: "linear-gradient(to top, black, gray)",
      }}
    >
      {children}
    </div>
  );
};

export default AppFrame;
