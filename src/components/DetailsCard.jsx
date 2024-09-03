import React from "react";
import { useParams } from "react-router-dom";

const DetailsCard = ({ data }) => {
  const { type } = useParams();
  if (type === "agents") {
    return (
      <>
        {/*

        <div>
          <img alt="Details" src={data.displayIcon} />
        </div>
        */}
        <div>
          <h1>{data.displayName}</h1>
        </div>
        {/*
          <div>
            <h3>{data.description}</h3>
          </div>

          */}
        {/*
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data?.abilities?.map((e) => (
              <div key={e.displayName}>
                <div>
                  <h3>{e.displayName}</h3>
                </div>
                <div>
                  <img alt="Abilities" src={e.displayIcon} />
                </div>
              </div>
            ))}
          </div>

          */}
      </>
    );
  }

  if (type === "weapons") {
    return (
      <>
        <div></div>
        <div>
          <h1>{data.displayName}</h1>
        </div>
        {/*
          <div>
            <h2>{data?.category?.slice(21)}</h2>
          </div>

          */}
        {/*

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data?.skins?.map((e) => (
              <div key={e.uuid}>
                <div>
                  <h3>{e.displayName}</h3>
                </div>
                <div></div>
              </div>
            ))}
          </div>

          */}
      </>
    );
  }
};

export default DetailsCard;
