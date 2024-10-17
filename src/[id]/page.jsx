import React, { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import "./App.css";

function Site({ id }) {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <p>{id}</p>
    </div>
  )
}

export default Site