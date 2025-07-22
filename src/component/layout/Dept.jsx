import React from 'react'

function Dept({dept, onDeptChange }) {
  return (
    <>
      <div className="bg-white flex px-1 py-1 rounded-full border border-red-500 overflow-hidden max-w-md mx-auto">
        <select
          name="dept"
          id="dept"
          value={dept}
          onChange={onDeptChange}
          className="bg-white outline-none text-sm w-full px-2 py-1"
        >
          <option value="">Select Department</option>
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
      </div>
    </>
  );
}

export default Dept