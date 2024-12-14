'use client'; // Add this line at the top of the file
import DatePickerComponent from "@/components/common/DatePicker"; 
import PlacePicker from "@/components/common/PlacePicker";
import TimePickerComponent from "@/components/common/TimePicker";
import Image from "next/image";
import Link from "next/link";
import ProductFilter from "@/components/common/ProductFilter"; // Import the ProductFilter component
import React, { useState } from 'react';

export default function Hero() {
  const [filter, setFilter] = useState({
    gender: ['male'],
    categories: ['electronics'],
    colors: [],
    price: '0-300',
    rating: 4
  });

  const handelFilter = (type, value, newValue) => {
    setFilter((prevFilter) => {
      if (newValue !== undefined) {
        return { ...prevFilter, [type]: newValue };
      }
      if (type === 'price') {
        return { ...prevFilter, [type]: value };
      }
      const updated = prevFilter[type].includes(value)
        ? prevFilter[type].filter((item) => item !== value)
        : [...prevFilter[type], value];
      return { ...prevFilter, [type]: updated };
    });
  };

  return (
    <section className="section banner-home2 mb-50">
      <div className="box-banner-homepage-2">
        <div
          className="box-cover-image boxBgImage"
          style={{
            backgroundImage: "url(assets/imgs/page/homepage1/banner3.png)",
          }}
        ></div>
      </div>

      {/* Include the ProductFilter component */}
      <div className="product-filter-section">
        <ProductFilter filter={filter} handelFilter={handelFilter} />
      </div>
    </section>
  );
}
