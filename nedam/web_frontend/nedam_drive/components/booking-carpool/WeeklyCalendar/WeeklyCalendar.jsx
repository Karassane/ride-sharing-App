"use client";

import React, { useState } from "react";
import "./WeeklyCalendar.css";

const WeeklyCalendar = () => {
  const daysOfWeek = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  // Initialiser l'état pour chaque jour, avec des contrôles séparés pour Domicile et Travail
  const initialState = daysOfWeek.reduce((acc, day) => {
    acc[day] = {
      home: { time: "07:30", active: true },
      work: { time: "17:00", active: true },
    };
    return acc;
  }, {});

  const [schedule, setSchedule] = useState(initialState);

  const handleToggle = (day, type) => {
    setSchedule({
      ...schedule,
      [day]: {
        ...schedule[day],
        [type]: {
          ...schedule[day][type],
          active: !schedule[day][type].active,
        },
      },
    });
  };

  const handleTimeChange = (day, type, value) => {
    setSchedule({
      ...schedule,
      [day]: {
        ...schedule[day],
        [type]: {
          ...schedule[day][type],
          time: value,
        },
      },
    });
  };

  return (
    <div className="weekly-calendar">
      <h2>Mon Trajet</h2>
      <div className="addresses">
        <div className="address">
          <span className="icon">🏠</span>
          <div>
            <p>Domicile</p>
            <a href="#modify-home">Modifier l'adresse</a>
          </div>
        </div>
        <div className="address">
          <span className="icon">💼</span>
          <div>
            <p>Travail</p>
            <a href="#modify-work">Modifier l'adresse</a>
          </div>
        </div>
      </div>

      <div className="switches">
        <label>
          <input type="checkbox" />
          Je suis conducteur
        </label>
        <label>
          <input type="checkbox" />
          Désactiver mon planning
        </label>
      </div>

      <h3>Mes horaires de départ habituels</h3>
      <div className="calendar-container">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-card">
            <h4>Chaque {day}</h4>
            {/* Section Domicile */}
            <div className="time-row">
              <span>Domicile</span>
              <input
                type="time"
                value={schedule[day].home.time}
                onChange={(e) => handleTimeChange(day, "home", e.target.value)}
                disabled={!schedule[day].home.active}
              />
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={schedule[day].home.active}
                  onChange={() => handleToggle(day, "home")}
                />
                <span className="slider"></span>
              </label>
            </div>

            {/* Section Travail */}
            <div className="time-row">
              <span>Travail</span>
              <input
                type="time"
                value={schedule[day].work.time}
                onChange={(e) => handleTimeChange(day, "work", e.target.value)}
                disabled={!schedule[day].work.active}
              />
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={schedule[day].work.active}
                  onChange={() => handleToggle(day, "work")}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        ))}
      </div>
      <button className="save-button">Enregistrer</button>
    </div>
  );
};

export default WeeklyCalendar;
