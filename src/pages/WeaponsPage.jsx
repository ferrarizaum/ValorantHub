import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import fetchWeapons from "../api/Weapons/fetchWeapons";
import Filter from "../components/Filter";
import { useLocation, useNavigate } from "react-router-dom";

const WeaponsPage = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const location = useLocation();
  const type = location.pathname;
  const navigate = useNavigate();

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginLeft: 24 }}>
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div style={{ marginRight: 24 }}>
          <button onClick={() => navigate("/weapons/create")}>
            Create new Weapon
          </button>
        </div>
      </div>
      <Card data={filteredData} type={type} />
    </>
  );
};

export default WeaponsPage;
