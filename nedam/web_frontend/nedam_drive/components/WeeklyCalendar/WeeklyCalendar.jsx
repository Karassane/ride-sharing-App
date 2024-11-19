"use client";

import React, { useState } from "react";
import "./WeeklyCalendar.css";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WeeklyCalendar = () => {
  const initialState = daysOfWeek.reduce((acc, day) => {
    acc[day] = {
      departureTime: "",
      departureLocation: "",
      arrivalTime: "",
      arrivalLocation: "",
    };
    return acc;
  }, {});

  const [schedule, setSchedule] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState({});

  const handleChange = (day, field, value) => {
    setSchedule({
      ...schedule,
      [day]: {
        ...schedule[day],
        [field]: value,
      },
    });

    // Clear errors for the specific field
    if (errors[day]) {
      setErrors({
        ...errors,
        [day]: {
          ...errors[day],
          [field]: "",
        },
      });
    }
  };

  const validate = (day) => {
    const daySchedule = schedule[day];
    const newErrors = {};

    if (!daySchedule.departureTime) {
      newErrors.departureTime = "Départ requis";
    }
    if (!daySchedule.departureLocation) {
      newErrors.departureLocation = "Lieu de départ requis";
    }
    if (!daySchedule.arrivalTime) {
      newErrors.arrivalTime = "Arrivée requise";
    }
    if (!daySchedule.arrivalLocation) {
      newErrors.arrivalLocation = "Lieu d'arrivée requis";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [day]: newErrors,
      }));
      return false;
    }

    return true;
  };

  const searchDrivers = async (day) => {
    if (!validate(day)) {
      return;
    }

    setLoading((prevLoading) => ({
      ...prevLoading,
      [day]: true,
    }));

    // Simuler une requête API
    try {
      // Remplacez ceci par votre logique de recherche de chauffeurs
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert(`Recherche des chauffeurs pour ${day} réussie!`);
    } catch (error) {
      console.error(error);
      alert(`Erreur lors de la recherche des chauffeurs pour ${day}.`);
    } finally {
      setLoading((prevLoading) => ({
        ...prevLoading,
        [day]: false,
      }));
    }
  };

  return (
    <div className="weekly-calendar">
      <h2>NEDAM Daily - Calendrier Hebdomadaire</h2>
      <div className="calendar-grid">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-card">
            <h3>{day}</h3>
            <div className="input-group">
              <label>Heure de Départ:</label>
              <input
                type="time"
                value={schedule[day].departureTime}
                onChange={(e) =>
                  handleChange(day, "departureTime", e.target.value)
                }
              />
              {errors[day]?.departureTime && (
                <span className="error">{errors[day].departureTime}</span>
              )}
            </div>
            <div className="input-group">
              <label>Lieu de Départ:</label>
              <input
                type="text"
                placeholder="Entrez le lieu de départ"
                value={schedule[day].departureLocation}
                onChange={(e) =>
                  handleChange(day, "departureLocation", e.target.value)
                }
              />
              {errors[day]?.departureLocation && (
                <span className="error">{errors[day].departureLocation}</span>
              )}
            </div>
            <div className="input-group">
              <label>Heure d'Arrivée:</label>
              <input
                type="time"
                value={schedule[day].arrivalTime}
                onChange={(e) =>
                  handleChange(day, "arrivalTime", e.target.value)
                }
              />
              {errors[day]?.arrivalTime && (
                <span className="error">{errors[day].arrivalTime}</span>
              )}
            </div>
            <div className="input-group">
              <label>Lieu d'Arrivée:</label>
              <input
                type="text"
                placeholder="Entrez le lieu d'arrivée"
                value={schedule[day].arrivalLocation}
                onChange={(e) =>
                  handleChange(day, "arrivalLocation", e.target.value)
                }
              />
              {errors[day]?.arrivalLocation && (
                <span className="error">{errors[day].arrivalLocation}</span>
              )}
            </div>
            <button
              className="search-button"
              onClick={() => searchDrivers(day)}
              disabled={loading[day]}
            >
              {loading[day]
                ? "Recherche en cours..."
                : "Rechercher des Chauffeurs"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;
