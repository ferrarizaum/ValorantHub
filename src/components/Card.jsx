import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data, type }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <h1>Loading...</h1> // Show this while the data is being fetched
        ) : data.length > 0 ? (
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
          <h1>Item not Found ;/</h1>
        )}
      </div>
    </>
  );
};

export default Card;
