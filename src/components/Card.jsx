import React from "react";

const Card = ({ data }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((e) => (
          <div key={e.uuid} style={{ textAlign: "center", margin: "2em" }}>
            <div
              style={{
                backgroundColor: "lightGray",
                padding: "1px",
                borderRadius: "5px",
              }}
            >
              <img
                style={{ maxHeight: "250px", maxWidth: "180px" }}
                alt="feature"
                src={e.displayIcon}
              />
            </div>
            <div>
              <h1>{e.displayName}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
