import React from "react";

const DetailsCard = ({ data }) => {
  console.log(data);
  if (data) {
    return (
      <>
        {data.map((e) => {
          return <h1>{e.displayName}</h1>;
        })}
      </>
    );
  }
  return (
    <>
      <div>
        <h1>Loading</h1>
      </div>
    </>
  );
};

export default DetailsCard;
