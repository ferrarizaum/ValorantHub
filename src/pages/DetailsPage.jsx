import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import fetchDetails from "../api/fetchDetails";
import { useParams } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";

const DetailsPage = () => {
  const [data, setData] = useState([]);
  const { type, uuid } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDetails({ type, uuid });
      setData(data);
    };
    fetchData();
  }, [uuid, type]);

  return (
    <>
      <Navbar />
      <DetailsCard data={data} />
    </>
  );
};

export default DetailsPage;
