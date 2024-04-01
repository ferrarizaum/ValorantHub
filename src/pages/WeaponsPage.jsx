import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import fetchWeapons from "../api/fetchWeapons";
import Filter from "../components/Filter";

const WeaponsPage = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeapons();
      setData(data);
    };

    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.displayName.toLowerCase().includes(filter.toLowerCase())
    );
  }, [data, filter]);

  return (
    <>
      <Navbar />
      <Filter filter={filter} setFilter={setFilter} />
      <Card data={filteredData} />
    </>
  );
};

export default WeaponsPage;
