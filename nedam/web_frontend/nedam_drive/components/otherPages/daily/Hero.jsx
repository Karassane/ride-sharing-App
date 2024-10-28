"use client"; // Mark this component as a Client Component
import React, { useState } from 'react';
import PlacePicker from "@/components/common/PlacePicker";
import DatePicker from "@/components/common/DatePicker";
import Image from "next/image";

const Hero = () => {
  const [passengerCount, setPassengerCount] = useState(1); // Start with 1 passenger

  const handlePassengerChange = (change) => {
    setPassengerCount((prevCount) => {
      const newCount = prevCount + change;
      return newCount < 1 ? 1 : newCount; // Ensure count doesn't go below 1
    });
  };

  return (
    <section className="section banner-daily bg-2 pt-150 pb-160">
      <div className="container-sub">
        <div className="box-banner-homepage-4">
          <p className="text-16 color-text wow fadeInUp">
            Where Would You Like To Go?
          </p>
          <h1 className="heading-52-medium color-text mb-30 wow fadeInUp">
            Nedam Daily, Your Daily Carpool Partner!
          </h1>
          <div className="box-search-ride box-search-ride-3 wow fadeInUp">
            
            {/* 'From' PlacePicker */}
            <div className="search-item search-from">
              <div className="search-icon">
                <span className="item-icon icon-from"></span>
              </div>
              <div className="search-inputs">
                <label className="text-14 color-grey">From</label>
                <PlacePicker />
              </div>
            </div>
            
            {/* 'To' PlacePicker */}
            <div className="search-item search-to">
              <div className="search-icon">
                <span className="item-icon icon-to"></span>
              </div>
              <div className="search-inputs">
                <label className="text-14 color-grey">To</label>
                <PlacePicker />
              </div>
            </div>
            
            {/* DatePicker */}
            <div className="search-item search-date">
              <div className="search-icon">
                <span className="item-icon icon-date"></span>
              </div>
              <div className="search-inputs">
                <label className="text-14 color-grey">Date</label>
                <DatePicker />
              </div>
            </div>
            
            {/* Passenger Control */}
            <div className="search-item search-passengers">
  <div className="search-icon">
    
    <span className="item-icon icon-passengers">
    <span className="passenger-count" style={{ color: 'black', fontSize: '24px' }}>
        {passengerCount}
      </span>

    </span>
    
  </div>
  <div className="search-inputs">
    
    <label className="text-14 color-grey">Passengers</label>
    <div className="passenger-controls" style={{ border: '1px solid red' }}>
      <button
        className="passenger-btn"
        onClick={() => handlePassengerChange(-1)}
      >
        -
      </button>
      
      <button
        className="passenger-btn"
        onClick={() => handlePassengerChange(1)}
      >
        +
      </button>
    </div>
  </div>
</div>
            
            {/* Search Button */}
            <div className="search-item search-button">
              <button className="btn btn-search" type="submit">
                <Image
                  width={20}
                  height={20}
                  src="/assets/imgs/template/icons/search.svg"
                  alt="luxride"
                />
                Search
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
