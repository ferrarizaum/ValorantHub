import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Filter from "../components/Filter";
import fetchAgents from "../api/fetchAgents";

const AgentsPage = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAgents();
      setData(data);
    };

    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.displayName.toLowerCase().includes(filter.toLowerCase())
    );
  }, [data, filter]);
  //add details card

  return (
    <>
      <Navbar />
      <Filter filter={filter} setFilter={setFilter} />
      <Card data={filteredData} />
    </>
  );
};

export default AgentsPage;
