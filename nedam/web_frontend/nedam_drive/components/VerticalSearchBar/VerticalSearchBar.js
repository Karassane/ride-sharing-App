"use client";

import React, { useState } from "react";
import "./VerticalSearchBar.scss";

const VerticalSearchBar = ({ onSearch }) => {
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
    <div className="vertical-search-bar">
      <div className="search-item">
        <span className="icon">🛫</span>
        <div>
          <label className="label">From</label>
          <input
            type="text"
            className="value-input"
            placeholder="Enter departure location"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
      </div>

      <div className="search-item">
        <span className="icon">🛬</span>
        <div>
          <label className="label">To</label>
          <input
            type="text"
            className="value-input"
            placeholder="Enter destination"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
      </div>

      <div className="search-item">
        <span className="icon">📅</span>
        <div>
          <label className="label">Date</label>
          <input
            type="date"
            className="value-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <div className="search-item">
        <span className="icon">👤</span>
        <div>
          <label className="label">Passengers</label>
          <input
            type="number"
            className="value-input"
            min="1"
            max="10"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          />
        </div>
      </div>

      <button className="search-button" onClick={handleSearch}>
        <span>🔍</span> Search
      </button>
    </div>
  );
};

export default VerticalSearchBar;
