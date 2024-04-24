import React from "react";

const DetailsCard = ({ data }) => {
  console.log(data);

  return (
    <>
      <div>
        <h1>{data.displayName}</h1>
      </div>
      <div>
        <img src={data.displayIcon} />
      </div>
    </>
  );
};

export default DetailsCard;
