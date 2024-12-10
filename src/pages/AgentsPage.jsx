import React, { useState, useEffect, useMemo } from "react";
import Navbar, { buttonStyle } from "../components/Navbar";
import Card from "../components/Card";
import Filter from "../components/Filter";
import fetchAgents from "../api/Agents/fetchAgents";
import { useLocation, useNavigate } from "react-router-dom";

const AgentsPage = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const location = useLocation();
  const type = location.pathname;
  const navigate = useNavigate();

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
          <button
            style={buttonStyle}
            onClick={() => navigate("/agents/create")}
          >
            Create new Agent
          </button>
        </div>
      </div>
      <Card data={filteredData} type={type} />
    </>
  );
};

export default AgentsPage;
