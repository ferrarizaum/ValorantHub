import React from "react";
import { useParams } from "react-router-dom";

const DetailsCard = ({ data }) => {
  const { type } = useParams();

  if (type === "agents") {
    return (
      <>
        <div>
          <img alt="Details" src={data.displayIcon} />
        </div>
        <div>
          <h1>{data.displayName}</h1>
        </div>
        <div>
          <h2>{data.description}</h2>
        </div>
      </>
    );
  }

  if (type === "weapons") {
    return (
      <>
        <div>
          <img alt="Details" src={data.displayIcon} />
        </div>
        <div>
          <h1>{data.displayName}</h1>
        </div>
        <div>
          <h2>{data?.category?.slice(21)}</h2>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <h1>Loading...</h1>
      </div>
    </>
  );
};

export default DetailsCard;
