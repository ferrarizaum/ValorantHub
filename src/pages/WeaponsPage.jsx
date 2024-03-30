import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import fetchWeapons from "../api/fetchWeapons";

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
      <Card data={memoizedWeapons} />
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default WeaponsPage;
