import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data, type }) => {
  const navigate = useNavigate();
  console.log(data);
  console.log(process.env.REACT_APP_BACKEND_ADDRESS);
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
              onClick={() => navigate(`/details${type}/${e.id}`)}
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
                  src={
                    "https://8f78-138-97-132-206.ngrok-free.app/ADADADADA2024-09-03T18:37:01.789691.png"
                  }
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
