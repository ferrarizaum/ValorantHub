import React from "react";

const DetailsCard = ({ data }) => {
  return (
    <>
      <div>
        <h1>{data.displayName}</h1>
      </div>
      <div>
        <img alt="Details" src={data.displayIcon} />
      </div>
    </>
  );
};

export default DetailsCard;
