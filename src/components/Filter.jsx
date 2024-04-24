import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        style={{
          padding: "12px",
          borderRadius: "5px",
          outline: "none",
          marginLeft: "90px",
          marginTop: "10px",
        }}
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
