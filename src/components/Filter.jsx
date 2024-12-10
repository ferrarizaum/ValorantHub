import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        style={{
          width: 400,
          padding: 12,
          borderRadius: 5,
          marginTop: 10,
          outline: "none",
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
