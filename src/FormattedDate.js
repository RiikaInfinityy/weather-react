import React from "react";

import "./WeatherInfo.css";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let today = props.date.getDate();

  return (
    <div>
      <div className="current-date">
        {month} {today}, {year} ({day})
      </div>
      <div className="current-time">
        <i className="bi bi-dot"></i>Last Updated on {hours}:{minutes}{" "}
        <i className="bi bi-dot"></i>
      </div>
    </div>
  );
}
