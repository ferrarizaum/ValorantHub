import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data, type }) => {
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
        {data.length > 0 ? (
          data.map((e) => (
            <div
              key={e.id}
              style={{ textAlign: "center", margin: "2em" }}
              onClick={() => navigate(`${type}/details/${e.id}`)}
            >
              <div
                style={{
                  backgroundColor: "lightGray",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                <img
                  style={{
                    height: "180px",
                    width: "180px",
                    borderRadius: 20,
                  }}
                  alt="feature"
                  src={e.imageUrl}
                />
              </div>
              <div style={{ marginTop: 20, color: "white" }}>
                <h1>{e.displayName}</h1>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1>No Item Found ;/</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
