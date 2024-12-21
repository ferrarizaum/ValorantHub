import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import fetchWeapons from "../api/Weapons/fetchWeapons";
import Filter from "../components/Filter";
import { useLocation } from "react-router-dom";
import CreateWeaponForm from "../components/CreateWeaponForm";

const WeaponsPage = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const location = useLocation();
  const type = location.pathname;

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
          justifyContent: "center",
        }}
      >
        <div>
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div style={{ alignSelf: "center", marginTop: 6, marginLeft: 6 }}>
          <CreateWeaponForm />
        </div>
      </div>
      <Card data={filteredData} type={type} />
    </>
  );
};

export default WeaponsPage;
