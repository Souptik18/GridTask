import React from "react";

function Search({ setSearch }) {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex justify-end mb-8">
      <input
        type="search"
        name=""
        id=""
        onChange={handleSearch}
        placeholder="Search products"
        className="border-2 border-gray-300 p-2 rounded-lg m-2"
      />
    </div>
  );
}

export default Search;
