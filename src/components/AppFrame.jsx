import React from "react";

const AppFrame = ({ children }) => {
  return (
    <div
      style={{
        height: "98vh",
        backgroundColor: "#808080",
        margin: 0,
        padding: 0,
        borderRadius: "10px",
        overflowY: "auto",
        fontFamily: "Roboto",
        fontSize: "Medium",
      }}
    >
      {children}
    </div>
  );
};

export default AppFrame;
