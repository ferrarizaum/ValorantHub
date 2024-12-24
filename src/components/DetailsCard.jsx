import React from "react";
import { useParams } from "react-router-dom";

const DetailsCard = ({ data }) => {
  const { type } = useParams();
  if (type === "agents") {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifySelf: "center",
            flexDirection: "column",
            marginTop: 20,
          }}
        >
          <div>
            <img
              style={{ maxWidth: 500, maxHeight: 500, borderRadius: 20 }}
              alt="Details"
              src={data.imageUrl}
            />
          </div>
          <div
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            <div style={{ marginTop: 20 }}>
              <h1>{data.displayName}</h1>
            </div>
            <div style={{ marginTop: 20 }}>
              <h3>{data.description}</h3>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (type === "weapons") {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifySelf: "center",
            flexDirection: "column",
            marginTop: 20,
          }}
        >
          <div>
            <img
              style={{ maxWidth: 500, maxHeight: 500, borderRadius: 20 }}
              alt="Details"
              src={data.imageUrl}
            />
          </div>
          <div
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            <div style={{ marginTop: 20 }}>
              <h1>{data.displayName}</h1>
            </div>
            <div style={{ marginTop: 20 }}>
              <h3>{data.description}</h3>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default DetailsCard;
