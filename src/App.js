import React from "react";

import Search from "./Search";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-body">
        <div className="main-container shadow">
          <Search defaultCity="Italy" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
