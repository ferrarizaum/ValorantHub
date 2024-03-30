import React, { useState } from "react";

const Filter = ({ data }) => {
  const [filter, setFilter] = useState("");

  const filteredData = data.filter((item) =>
    item.displayName.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Filter by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.displayName}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Filter;
