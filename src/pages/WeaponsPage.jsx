import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import fetchWeapons from "../api/Weapons/fetchWeapons";
import Filter from "../components/Filter";
import { useLocation } from "react-router-dom";
import CreateWeaponForm from "../components/CreateWeaponForm";
import { useQuery } from "@tanstack/react-query";

const WeaponsPage = () => {
  const [filter, setFilter] = useState("");
  const location = useLocation();
  const type = location.pathname;

  const { data = [], isLoading } = useQuery({
    queryKey: ["weapons"],
    queryFn: fetchWeapons,
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
          <CreateWeaponForm />
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

export default WeaponsPage;
