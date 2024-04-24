import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();
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
          <div
            key={e.uuid}
            style={{ textAlign: "center", margin: "2em" }}
            onClick={() => navigate("/details/${uuid}")}
          >
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
