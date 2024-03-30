import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Filter from "../components/Filter";
import fetchAgents from "../api/fetchAgents";

const AgentsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAgents();
      setData(data);
    };

    fetchData();
  }, []);

  const memoizedAgents = useMemo(() => data, [data]);

  return memoizedAgents ? (
    <>
      <Navbar />
      <Filter data={memoizedAgents} />
      <Card data={memoizedAgents} />
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default AgentsPage;
