import React from "react";
import Navbar from "../components/Navbar";
import fetchDetails from "../api/fetchDetails";
import { useParams } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";
import { useQuery } from "@tanstack/react-query";

const DetailsPage = () => {
  const { type, uuid } = useParams();

  const { data = [], isLoading } = useQuery({
    queryKey: ["details", type, uuid],
    queryFn: () => fetchDetails({ type, uuid }),
  });

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>Loading...</h1>
        </div>
      ) : (
        <DetailsCard data={data} />
      )}
    </>
  );
};

export default DetailsPage;
