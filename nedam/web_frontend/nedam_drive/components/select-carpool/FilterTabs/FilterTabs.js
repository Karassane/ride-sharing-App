"use client";

import React, { useState } from "react";
import "./FilterTabs.scss";

const FilterTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (key) => {
    setActiveTab(key);

    // Logique de clic basée sur la clé
    switch (key) {
      case "all":
        console.log("All tab clicked");
        break;
      case "carpooling":
        console.log("Carpooling tab clicked");
        break;
      case "bus":
        console.log("Bus tab clicked");
        break;
      default:
        break;
    }
  };

  return (
    <div className="filter-tabs">
      {Object.entries(tabs).map(([key, tab]) => (
        <div
          key={key}
          className={`tab ${activeTab === key ? "active" : ""}`}
          onClick={() => handleTabClick(key)} // Gérez le clic ici
        >
          <span className="icon">{tab.icon}</span>
          <span className="label">{tab.label}</span>
          <span className="count">· {tab.count}</span>
        </div>
      ))}
    </div>
  );
};

export default FilterTabs;
