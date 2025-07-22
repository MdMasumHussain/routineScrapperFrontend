import React from "react";
import { useState } from "react";

function Search({placeholder,onSearch}) {
  const [batch, setBatch] = useState("");
  const [dept, setDept] = useState("CSE");

  const handleSearch = () => {

    if (onSearch && typeof onSearch === "function") {
      // Add a check for safety
      onSearch({batch, dept});
    } else {
      console.warn("onSearch prop is not a function or is missing.");
    }
    }
  return (
    <>
      <div className="bg-white flex px-1 py-1 rounded-full border border-red-500 overflow-hidden max-w-md mx-auto">
        <select
          name="dept"
          id="dept"
          className="bg-white outline-none text-sm px-2 py-1 border-r border-red-500"
          value={dept}
          onChange={(e) => setDept(e.target.value)}
        >
          <option value="CSE">CSE</option>
          <option value="EEE">EEE</option>
          <option value="BBA">BBA</option>
          <option value="LAW">LAW</option>
          <option value="ENG">ENG</option>
          <option value="ME">ARCH</option>
          <option value="PHARMACY">PHARMACY</option>
          <option value="CE">CE</option>
          <option value="TE">TE</option>
        </select>
        <input
          type="email"
          placeholder={placeholder.placeholder || "Search by name or ID"}
          className="w-full outline-none bg-white pl-4 text-sm"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          disabled={!batch}
          type="button"
          className="bg-red-600 hover:bg-red-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
        >
          Search
        </button>
      </div>
    </>
  );
}

export default Search;
