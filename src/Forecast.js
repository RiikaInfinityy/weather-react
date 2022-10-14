import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <br />
      <div className="row full-weather-report bg-light border-white rounded justify-content-center bg-opacity-50">
        <div className="col-2 card text-center">
          <div className="card-body">
            <h4 className="card-title">Wednesday</h4>
            <h6 className="card-subtitle mb-2 text-muted">5 October, 2022</h6>
            <p>
              <i className="fa-solid fa-cloud-sun partlycloudy fa-fade"></i>
            </p>
            <span className="minmaxTemp">
              <strong>27&#176;</strong> 16&#176;{" "}
            </span>
            <br />
          </div>
        </div>

        <div className="col-2 card text-center">
          <div className="card-body">
            <h4 className="card-title">Thursday</h4>
            <h6 className="card-subtitle mb-2 text-muted">6 October, 2022</h6>
            <p>
              <i className="fa-solid fa-sun sunny fa-sync fa-spin"></i>
            </p>
            <span className="minmaxTemp">
              <strong>27&#176;</strong> 17&#176;{" "}
            </span>
            <br />
          </div>
        </div>

        <div className="col-2 card text-center">
          <div className="card-body">
            <h4 className="card-title">Friday</h4>
            <h6 className="card-subtitle mb-2 text-muted">7 October, 2022</h6>
            <p>
              <i className="fa-solid fa-sun sunny fa-sync fa-spin"></i>
            </p>
            <span className="minmaxTemp">
              <strong>28&#176;</strong> 19&#176;{" "}
            </span>
            <br />
          </div>
        </div>

        <div className="col-2 card text-center">
          <div className="card-body">
            <h4 className="card-title">Saturday</h4>
            <h6 className="card-subtitle mb-2 text-muted">8 October, 2022</h6>
            <p>
              <i className="fa-solid fa-cloud-rain raining fa-beat-fade"></i>
            </p>
            <span className="minmaxTemp">
              <strong>22&#176;</strong> 13&#176;{" "}
            </span>
            <br />
          </div>
        </div>

        <div className="col-2 card text-center">
          <div className="card-body">
            <h4 className="card-title">Sunday</h4>
            <h6 className="card-subtitle mb-2 text-muted">9 October, 2022</h6>
            <p>
              <i className="fa-solid fa-cloud-bolt storm fa-beat-fade"></i>
            </p>
            <span className="minmaxTemp">
              <strong>23&#176;</strong> 12&#176;
            </span>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
