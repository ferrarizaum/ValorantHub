import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import fetchMaps from "../api/fetchMaps";
import Filter from "../components/Filter";

const MapsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMaps();
      setData(data);
    };

    fetchData();
  }, []);

  const memoizedMaps = useMemo(() => data, [data]);

  return memoizedMaps ? (
    <>
      <Navbar />
      <Filter data={memoizedMaps} />
      <Card data={memoizedMaps} />
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default MapsPage;
