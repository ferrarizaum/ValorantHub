import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Filter from "../components/Filter";
import fetchAgents from "../api/fetchAgents";
import { useLocation } from "react-router-dom";

const AgentsPage = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const location = useLocation();
  const type = location.pathname;

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

  return (
    <>
      <Navbar />
      <Filter filter={filter} setFilter={setFilter} />
      <Card data={filteredData} type={type} />
    </>
  );
};

export default AgentsPage;
