"use client"; // Ensure client-side rendering
import React, { useState } from "react";
import "./Trajects.css"; // Import the CSS file
import "../WeeklyCalendar/WeeklyCalendar.css";

const Trajects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleBox = () => {
    setIsExpanded(!isExpanded);
  };

  // Days of the week
  const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  // Sample schedule state
  const [schedule, setSchedule] = useState({
    Lundi: { home: { time: '08:00', active: true }, work: { time: '09:00', active: true } },
    Mardi: { home: { time: '08:00', active: false }, work: { time: '09:00', active: false } },
    Mercredi: { home: { time: '08:00', active: true }, work: { time: '09:00', active: false } },
    Jeudi: { home: { time: '08:00', active: false }, work: { time: '09:00', active: true } },
    Vendredi: { home: { time: '08:00', active: true }, work: { time: '09:00', active: true } },
    Samedi: { home: { time: '08:00', active: false }, work: { time: '09:00', active: false } },
    Dimanche: { home: { time: '08:00', active: false }, work: { time: '09:00', active: false } },
  });

  // Handle time change
  const handleTimeChange = (day, section, time) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        [section]: { ...prevSchedule[day][section], time: time },
      },
    }));
  };

  // Handle toggle (activating/deactivating home or work schedule)
  const handleToggle = (day, section) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        [section]: { ...prevSchedule[day][section], active: !prevSchedule[day][section].active },
      },
    }));
  };

  return (
    <div>
      <div className="box" onClick={toggleBox}>
        <img src="path-image.jpg" alt="Choose your path" className="box-image" />
        <h3 className="box-text">Choose your path</h3>
      </div>

      {isExpanded && (
        <div className="expanded-box">
          <div className="custom-grid-container">
            {/* First grid cell with the toggle box */}
            <div className="grid-item collapse-box" onClick={toggleBox}>
              <img src="path-image.jpg" alt="Collapse" className="box-image" />
              <h4 className="box-text">Collapse</h4>
            </div>

            {/* Other grid cells for each day */}
            {daysOfWeek.map((day) => (
              <div key={day} className="grid-item">
                <h4>{day}</h4>

                {/* Section Domicile */}
                <div className="time-row">
                  <span>Domicile</span>
                  <input
                    type="time"
                    value={schedule[day].home.time}
                    onChange={(e) => handleTimeChange(day, 'home', e.target.value)}
                    disabled={!schedule[day].home.active}
                  />
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={schedule[day].home.active}
                      onChange={() => handleToggle(day, 'home')}
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
                    onChange={(e) => handleTimeChange(day, 'work', e.target.value)}
                    disabled={!schedule[day].work.active}
                  />
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={schedule[day].work.active}
                      onChange={() => handleToggle(day, 'work')}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Trajects;
