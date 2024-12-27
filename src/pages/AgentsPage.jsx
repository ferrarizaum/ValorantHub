import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Filter from "../components/Filter";
import fetchAgents from "../api/Agents/fetchAgents";
import { useLocation } from "react-router-dom";
import CreateAgentForm from "../components/CreateAgentForm";
import { useQuery } from "@tanstack/react-query";

const AgentsPage = () => {
  const [filter, setFilter] = useState("");
  const location = useLocation();
  const type = location.pathname;

  const { data = [], isLoading } = useQuery({
    queryKey: ["agents"],
    queryFn: fetchAgents,
  });

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
        <div style={{ marginBottom: 3 }}>
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div style={{ alignSelf: "center", marginTop: 6, marginLeft: 6 }}>
          <CreateAgentForm />
        </div>
      </div>
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
        <Card data={filteredData} type={type} />
      )}
    </>
  );
};

export default AgentsPage;
