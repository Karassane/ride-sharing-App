"use client";

import React, { useState } from "react";
import "./HorizontalSearchBar.scss";

const HorizontalSearchBar = ({ onSearch }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ from, to, date, passengers });
    }
  };

  return (
    <div className="horizontal-search-bar">
      <div className="search-item">
        <span className="icon">🛫</span>
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>

      <div className="search-item">
        <span className="icon">🛬</span>
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>

      <div className="search-item">
        <span className="icon">📅</span>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="search-item">
        <span className="icon">👤</span>
        <input
          type="number"
          min="1"
          max="10"
          placeholder="Passengers"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
        />
      </div>

      <button className="search-button" onClick={handleSearch}>
        <span>🔍</span> Search
      </button>
    </div>
  );
};

export default HorizontalSearchBar;
