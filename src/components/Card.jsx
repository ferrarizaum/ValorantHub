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
                  padding: "1px",
                  borderRadius: "5px",
                }}
              >
                <img
                  style={{ maxHeight: "250px", maxWidth: "180px" }}
                  alt="feature"
                  src={e.imageUrl}
                />
              </div>
              <div>
                <h1>{e.displayName}</h1>
              </div>
            </div>
          ))
        ) : (
          <h1>Item not Found ;/</h1>
        )}
      </div>
    </>
  );
};

export default Card;
