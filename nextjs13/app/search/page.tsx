"use client";
import React, { useState } from "react";
function search() {
  const [search, setSearch] = useState("");
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
  };
  return (
    <div>
      <head>
        <title>Search page</title>
      </head>
      <div className="flex space-x-4 divide-x-2 p-5">
        <div>
          <h1> Search</h1>
        </div>

        <div className="flex-1 pl-5">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Enter the search term"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn bg-green-400">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default search;
