import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Filter from "../components/Filter";
import fetchAgents from "../api/Agents/fetchAgents";
import { useLocation } from "react-router-dom";
import CreateAgentForm from "../components/CreateAgentForm";

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div style={{ alignSelf: "center", marginTop: 6, marginLeft: 6 }}>
          <CreateAgentForm />
        </div>
      </div>
      <Card data={filteredData} type={type} />
    </>
  );
};

export default AgentsPage;
