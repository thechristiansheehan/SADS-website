import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar.jsx";

const API_KEY = "AIzaSyCs7QWetDO87E8_f1JrjKS5ThnnYjWI5Cg"; // Replace
const CALENDAR_ID = "christiansheehanwebsite@gmail.com"; // Replace

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [displayDate, setDisplayDate] = useState(new Date());

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.async = true;
    script.onload = () => {
      window.gapi.load("client", () => {
        window.gapi.client
          .init({
            apiKey: API_KEY,
            discoveryDocs: [
              "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
            ],
          })
          .then(() =>
            window.gapi.client.calendar.events.list({
              calendarId: CALENDAR_ID,
              timeMin: new Date().toISOString(),
              showDeleted: false,
              singleEvents: true,
              maxResults: 100,
              orderBy: "startTime",
            })
          )
          .then((response) => setEvents(response.result.items || []))
          .catch((err) => console.error("Error fetching events:", err));
      });
    };
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const formatDateKey = (event) =>
    event.start.dateTime
      ? new Date(event.start.dateTime).toISOString().split("T")[0]
      : event.start.date;

  const eventsByDate = events.reduce((acc, event) => {
    const key = formatDateKey(event);
    if (!acc[key]) acc[key] = [];
    acc[key].push(event);
    return acc;
  }, {});

  const today = new Date();
  const todayKey = today.toISOString().split("T")[0];

  const year = displayDate.getFullYear();
  const month = displayDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  // Days from previous month to fill first week
  const prevMonthDaysCount = firstDayOfMonth.getDay();
  const prevMonthLastDate = new Date(year, month, 0).getDate();

  const daysArray = [];
  // Previous month days
  for (let i = prevMonthDaysCount; i > 0; i--) {
    daysArray.push({
      date: new Date(year, month - 1, prevMonthLastDate - i + 1),
      currentMonth: false,
    });
  }
  // Current month days
  for (let d = 1; d <= lastDayOfMonth.getDate(); d++) {
    daysArray.push({
      date: new Date(year, month, d),
      currentMonth: true,
    });
  }
  // Next month days to fill last week
  const remaining = 7 - (daysArray.length % 7 || 7);
  for (let d = 1; d <= remaining; d++) {
    daysArray.push({
      date: new Date(year, month + 1, d),
      currentMonth: false,
    });
  }

  const goPrevMonth = () => setDisplayDate(new Date(year, month - 1, 1));
  const goNextMonth = () => setDisplayDate(new Date(year, month + 1, 1));

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px", color: "white" }}>
      <NavBar />
      <br /> <br />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={goPrevMonth} style={arrowBtnStyle}>&larr;</button>
        <h2>{displayDate.toLocaleString("default", { month: "long" })} {year}</h2>
        <button onClick={goNextMonth} style={arrowBtnStyle}>&rarr;</button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} style={{ fontWeight: "bold", textAlign: "center", color: "white" }}>
            {day}
          </div>
        ))}

        {daysArray.map(({ date, currentMonth }) => {
          const key = date.toISOString().split("T")[0];
          const dayEvents = eventsByDate[key] || [];
          const isToday = key === todayKey;

          return (
            <div
              key={key}
              style={{
                border: "1px solid #ffffff",
                borderRadius: "0px",
                padding: "5px",
                minHeight: "80px",
                color: currentMonth ? "white" : "#aaa",
                backgroundColor: isToday ? "#4444ff33" : "transparent",
              }}
            >
{dayEvents.map((event) => {
  const start = event.start.dateTime
    ? new Date(event.start.dateTime).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "All day";

  const location = event.location ? ` @ ${event.location}` : "";

  return (
    <div
      key={event.id}
      style={{
        fontSize: "0.75rem",
        color: currentMonth ? "white" : "#ccc",
        marginTop: "2px",
      }}
    >
      <strong>{event.summary}</strong>
      <div style={{ fontSize: "0.7rem" }}>
        {start}
        {location}
      </div>
    </div>
  );
})}

            </div>
          );
        })}
      </div>
    </div>
  );
};

// Minimal arrow button styling
const arrowBtnStyle = {
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: "1.5rem",
  cursor: "pointer",
};

export default Calendar;
