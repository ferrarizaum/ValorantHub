import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
