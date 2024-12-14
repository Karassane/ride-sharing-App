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

  const initialState = daysOfWeek.reduce((acc, day) => {
    acc[day] = {
      homeTime: "07:30",
      workTime: "17:00",
      active: true,
    };
    return acc;
  }, {});

  const [schedule, setSchedule] = useState(initialState);

  const handleToggle = (day) => {
    setSchedule({
      ...schedule,
      [day]: {
        ...schedule[day],
        active: !schedule[day].active,
      },
    });
  };

  const handleTimeChange = (day, field, value) => {
    setSchedule({
      ...schedule,
      [day]: {
        ...schedule[day],
        [field]: value,
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
            <div className="time-row">
              <span>Domicile</span>
              <input
                type="time"
                value={schedule[day].homeTime}
                onChange={(e) =>
                  handleTimeChange(day, "homeTime", e.target.value)
                }
                disabled={!schedule[day].active}
              />
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={schedule[day].active}
                  onChange={() => handleToggle(day)}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="time-row">
              <span>Travail</span>
              <input
                type="time"
                value={schedule[day].workTime}
                onChange={(e) =>
                  handleTimeChange(day, "workTime", e.target.value)
                }
                disabled={!schedule[day].active}
              />
            </div>
          </div>
        ))}
      </div>
      <button className="save-button">Enregistrer</button>
    </div>
  );
};

export default WeeklyCalendar;
