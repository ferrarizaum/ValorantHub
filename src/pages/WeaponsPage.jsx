import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import fetchWeapons from "../api/fetchWeapons";
import Filter from "../components/Filter";

const WeaponsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeapons();
      setData(data);
    };

    fetchData();
  }, []);

  const memoizedWeapons = useMemo(() => data, [data]);

  return memoizedWeapons ? (
    <>
      <Navbar />
      <Filter data={memoizedWeapons} />
      <Card data={memoizedWeapons} />
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default WeaponsPage;
