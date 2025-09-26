import React, { useEffect, useState } from "react";
import './Calendar.css';

const API_KEY = "AIzaSyCs7QWetDO87E8_f1JrjKS5ThnnYjWI5Cg"; // Replace
const CALENDAR_ID = "christiansheehanwebsite@gmail.com"; // Replace

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

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
              maxResults: 4, // show only 4
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

  const today = new Date();

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "20px",
        color: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        {events.map((event) => {
          const startDate = event.start.dateTime
            ? new Date(event.start.dateTime)
            : new Date(event.start.date);

          const dateString = startDate.toLocaleDateString([], {
            month: "short",
            day: "numeric",
            year: "numeric",
          });

          const timeString = event.start.dateTime
            ? startDate.toLocaleTimeString([], {
                hour: "numeric", // removes leading zero
                minute: "2-digit",
              })
            : "All day";

          const isToday = startDate.toDateString() === today.toDateString();

          return (
            <React.Fragment key={event.id}>
              {/* Block */}
              <div
                style={{
                  padding: "10px 15px",
                  minWidth: "160px",
                  textAlign: "center",
                  backgroundColor: "#404040",
                  border: isToday ? "2px solid white" : "none",
                }}
              >
                <div style={{ fontSize: "1.2rem", fontFamily: "RionaSansBlack", marginBottom: "5px" }}>
                  {event.summary}
                </div>
                <div style={{ fontFamily: "RionaSansBlack", fontSize: "0.9rem", fontWeight: "bold", marginBottom: "6px" }}>
                  {dateString}
                </div>
                <div style={{ fontFamily: "RionaSansMedium", fontSize: "0.9rem" }}>
                  {timeString}
                </div>
                {event.location && (
                  <div style={{ fontFamily: "RionaSansMedium", fontSize: "0.9rem" }}>
                    {event.location}
                  </div>
                )}
              </div>

              {/* Connector line: always shown */}
              <div
                style={{
                  height: "2px",
                  backgroundColor: "white",
                  width: "50px",
                  margin: "0 0px",
                }}
              />
            </React.Fragment>
          );
        })}
      </div>

      {/* View Full Calendar link */}
      <div className="viewfull" style={{ textAlign: "right", marginTop: "15px" }}>
        <a href="calendar" rel="noopener noreferrer">
          View full calendar →
        </a>
      </div>
    </div>
  );
};

export default UpcomingEvents;
